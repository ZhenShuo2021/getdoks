---
title: "Rician Fading生成方式，包含Emil Björnson大師的正解"
description: "介紹網路各種Rician fading的生成方法，特別強調Emil Björnson的建議。分析了多種方法的差異，並提供MATLAB程式碼範例。適合希望深入了解Rician fading生成的讀者。"
date: 2024-06-14T02:45:40+08:00
draft: false
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
 
先說結論：
1. method 1是 Emil Björnson 回覆的可信度最高。
2. method 2/3 少了 Emil 說的 LOS path random phase，而 method 2/3 不同處是 NLOS path的 {{< math >}}$\sigma${{< /math >}}  以及分母的 {{< math >}}$2k+1{{< /math >}}。
3. method 4/5 應該是不同的 formatting 方式。

## Method 1: Emil Björnson
[來源](https://www.researchgate.net/post/How_to_compute_Rician_fading_in_matlab)

有 Emil Björnson 大神回覆可信度最高，他本人也寫了一篇[文章](https://ma-mimo.ellintech.se/2020/03/02/rician-fading-a-channel-model-often-misunderstood/)解釋 rician fading 很多人都做錯。跟[MATLAB](https://www.mathworks.com/help/comm/ug/fading-channels.html)和[這裡](https://web.xidian.edu.cn/bmbai/files/20150129_145929.pdf)的生成方式一樣。

```math {.text-center}
{\large
\begin{aligned}
&h_{\text{LOS}} &&= e^{(j2\pi\mathcal{N}(1,1))} \newline
&h_{\text{NLOS}} &&= \mathcal{CN}(0, \sigma^2) \newline
&h &&= h_{\text{LOS}}\sqrt{\dfrac{K}{K + 1}} + h_{\text{NLOS}}\sqrt{\frac{1}{K + 1}}
\end{aligned}
}
```

## Method 2
[來源](https://zhuanlan.zhihu.com/p/378334372)

```math {.text-center}
{\large
\begin{align}
&h_\text{rayleigh} &&= \sqrt{\frac{\sigma^2}{2}} *(\mathcal{N}(1,1) + j\mathcal{N}(1,1)) \newline
&h_\text{rician} &&= \sqrt{\frac{k}{k+1}} + h_\text{rayleigh}\sqrt{\frac{1}{k+1}}
\end{align}
}
```

## Method 3
[來源](https://dsp.stackexchange.com/questions/84493/how-to-code-rician-fading-channel-gains-from-k-factor)

```math {.text-center}
{\large
\begin{align}
&h_{\text{NLOS}} &&= (\mathcal{N}(1,N)+j\mathcal{N}(1,N)) \newline
&h &&= \left|\sqrt{\dfrac{K}{K+1}}+h_{\text{NLOS}}\sqrt{\dfrac{1}{2(K+1)}}\right|
\end{align}
}
```

## Method 4
[來源](https://dsp.stackexchange.com/questions/84493/how-to-code-rician-fading-channel-gains-from-k-factor)

```math {.text-center}
{\large
\begin{align}
&s &&= \sqrt{\dfrac{1}{2(K+1)}}, \mu = \sqrt{\dfrac{K}{2(K+1)}} \newline
&h &&= ( s\mathcal{N}(1,1) + \mu ) + j( s\mathcal{N}(1,1) + \mu )
\end{align}
}
```

## Method 5
[來源](https://github.com/gokhanntosun/multipath-channel-models/blob/main/Rician_Fading.m)

{{< hint danger >}}
**測試此篇的nakagami fading是否正確！！**
{{< /hint >}}

```matlab
% LOS components
a = sqrt(K/2);  b = a;
% in-phase component
i = a + randn([1 size]);
% quadtature component
q = b + randn([1 size]);
% build fading component
s = (i + 1j*q);
```

## Method 6
[來源](https://github.com/Deeshant2234/QAM-Simulation-MATLAB/blob/main/QAM_BER.m)

{{< hint danger >}}
**此篇理論值與模擬不同，需要檢查為何錯誤！！**
{{< /hint >}}


```matlab
mean = sqrt(k1/(k1+1));  % mean
sigma = sqrt(1/(2*(k1+1)));  %variance
Nr2 = randn(N, 1)*sigma+mean;
Ni2 = randn(N, 1)*sigma;
% To generate the Rician Random Variable
h_rac = sqrt(Nr2.^2+Ni2.^2);  %Rician fading coefficient
```


TODO:
1. 對method 2/3: 查原文書確認些分母是 \\(k+1\\) 或 \\(2k+1\\)
2. 對method 2/3: 查原文書對Rayleigh fading 母數 \\(\sigma\\) 的解釋
3. 確認 method 4 中對 Nakagami fading 的模擬是否正確
4. 確認 method 5 錯在哪裡
