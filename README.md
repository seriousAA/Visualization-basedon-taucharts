### 基于taucharts的关于妇女权益的数据可视化

---

#### 设计目的

- 有意思的东西
  
  最开始得到交互式可视化的作业时，第一感觉就是要做一些自己感兴趣的东西，找一些有意思的数据，而不仅仅是为了应付作业去做。因为最近不管是在网络上还是在现实生活中，我们越来越多的听到“女权主义”这个词，这一词在网络上也引起过各种各样的讨论，我就开始好奇，在这个大家都越来越关注男女平权的时代，妇女权益或者说妇女们的处境到底是怎样一个情况呢？

- 妇女权益
  
  有意思的是，最近刚好看了一部电影，**《飓风营救》** 系列，第一部里面涉及到了关于妇女人口贩卖的问题，涉世不深的少女在家被人掳走卖到外地惨遭毒手，令我震惊的是这种问题在现实生活中是实际存在的，而且比电影里要严重得多。为了探究一下国际上妇女们所面临的真实处境，我决定将这次的可视化作业聚焦于世界妇女权益问题上。

- 关于数据维度的选择
  
  妇女权益是个很大的主题，我必须要具体到某一些可以衡量的标准上，而数据维度（或者说数据指标）的选择也决定了我要通过可视化探讨什么具体的问题。
  
  - 妇女人口贩卖
    
    这是我想到的第一个维度，但是这个维度的数据不好搜索，所以没有进行下去，实际上我在联合国毒品和犯罪问题办公室的网站中找到了有关国际人口贩卖的动态可视化版块，但是很遗憾该网站没有直接提供数据源。
  
  - 童婚问题
    
    在欠发达的国家或者地区，妇女权益的很大一方面反映在婚姻以及生育问题上。在联合国儿童基金会(UNICEF)的数据网站上，我很偶然地发现了一组有关童婚问题的数据，这一下子引起了我的兴趣，因为这不仅涉及到了妇女的权益，也涉及到了儿童的权益。童婚是对人权的侵犯，但在国际上仍然是一种常见的现象。
  
  - 早育以及对产妇的护理
    
    既然说到了童婚问题，那么便不可避免的涉及到了早育的问题，因为那些在18岁甚至15岁之前就被嫁出去的女孩都基本会面临早育的情况，那么对于这些早育产妇的产前护理以及产后护理工作是否到位呢，会不会有很多贫困地区仍然无法提供基本的生育卫生条件？同样是在UNICEF的数据网站上，我找到了一些青少年产妇的健康数据。其中提供了很多的数据指标，我选择了三个指标：
    
    1. 在15-19岁之间的产妇，在怀孕期间参加了四次及以上的产前护理的比例(ANC_4)
    
    2. 在15-19岁之间的产妇，在参加产前护理的时候，至少有一次进行了血样化验的比例(ANC_BD)
    
    3. 在15-19岁之间的产妇，在生产之后的两天内至少接受过一次产后护理的比例(PNC_WM)
    
    我认为这三个指标可以反映出早育产妇这一群体所面临的处境，我通过公式
    
    $$
    MNC=ANC_4*0.3+ANC_B*0.2+PNC_W*0.5
    $$
    
    可以进一步得出一个综合的指标(MNC)，并将它作为全面反映早育产妇健康状况的指标。
  
  - 新生儿以及产妇的死亡率
    
    统计了童婚、早育的情况，那么如果一个地区有童婚的传统，并且无法为早育产妇提供基本的生育卫生条件，自然而然地，我就想到了这肯定会影响当地新生儿的死亡率以及产妇的死亡率。刚好这两种数据都是较为容易取得的，所以我就进行了深入的调查。
  
  - 新生儿死亡原因
    
    在UNICEF的数据网站上，我取得了新生儿在出生28天内死亡的可能性(以每1,000名活产婴儿作为参照)，同时我还得到了新生儿的死亡原因数据，在死亡原因中，我比较在意分娩期内死亡以及早产导致的死亡，只有这两点可以反映当地的生育卫生环境，所以我利用公式
    
    $$
    NMR_N=NMR_O*(P(分娩时死亡)+P(早产死亡))
    $$
    
    通过新得到的MMR_N可以更好地对生育卫生条件进行评估。
  
  - 其他参考指标
    
    除了上面提到的与妇女权益有关的指标，为了更好地区分各个国家在经济、地理位置以及男女平等观念上的不同，我引入了另外三个指标：人均GDP、所处区域以及性别不平等指数(GII)。这样我就可以探讨妇女权益的保障与经济、地理以及男女平等程度之间的联系。

---

#### 可视化编码以及交互技术

- 散点图
  
  从一开始我就决定将工作重心放在数据的搜集与处理上，我不打算搞一些特别花哨的图表，我认为能够明显的提供出信息是最重要的。散点图在可视化中是最基本的图形，但是非常好用，在搜集数据的过程中，我就逐渐认识到，要反映出各个数据维度之间的关系，利用散点图是最直观的，而且不需要多余的数据处理。

- 怎样交互
  
  实现交互的功能是不难的，我直接使用了github上比较受欢迎的taucharts库，taucharts库的scatterplot组件本身就带有交互功能：tooltip、legend、export-to、trendline，除此之外我使得xy轴的label是可变的，我想要哪两个指标比较，就可以把xy轴的label换成对应的指标。plot的半径也可以表示一个数据维度，当然这也是可变的，而且plot的minsize与maxsize是可以根据用户的视觉偏好动态修正的(通过一个slider组件)，plot的颜色是按照国家所属的Region来分类的，那么我们也可以对Region进行筛选，使得图表中只出现我们想要的地区的数据点。

---

#### 开发过程

- 时间分配
  
  我的重点工作毫无疑问地落在了搜集数据上面，我整个项目算起来前前后后持续了三个星期，但是大部分时间都是在搜集数据或者说处理数据，真正写代码的时间大概也就那么四五天吧，其中一部分时间是用来熟悉库的语法，真正写代码的时间也就两三天。中间更换主题以及更换可视化工具也耽误了不少时间，一开始打算直接用Tableau画图后直接挂到服务器上的，但是后来发现这样做不符合作业要求，只能放弃，这个波折就有点打乱了我的计划。

- 关于主题变更
  
  最开始的一个星期基本都是在试错，确立了一个主题，结果发现根本找不到能用的数据，要么是数据太老，要么是数据太少，要么是数据太杂乱以至于无法跟其它维度的数据相匹配，然后就只能再换一个其它相关的主题。我的主题的变更路线大概是这样的：现代婚姻结构—性犯罪—人口贩卖—妇女权益，可以想到我中间经历了多少波折。

- 回顾总结
  
  我学会了什么：
  
  - 翻墙访问国外网站
  
  - 快速在各类网站中获得自己想要的数据
  
  - 利用Excel函数对工作表进行合并、筛选、查重
  
  - 使用npm快速得到自己想要的js库
  
  - 通过github收集自己需要的插件，并快速掌握其语法
  
  - 熟悉了taucharts这一强大的可视化库

---

#### 我的一点分析

首先我要说选择散点图的好处是可以显示很多数据维度，不需要额外的数据处理，但是坏处就是很多数据特征可能不是那么明显。但是对于我感兴趣的几个问题，它还是可以给出一些提示的。

- 关于数据分布
  
  不知道为什么，我得到的数据里面没有西欧、北美那些常见的发达地区的数据，这正好帮了我一个忙，因为经济发达地区的妇女权益更多地集中于教育以及参政方面，而我这次主要考虑的是较为底层的物质需求。

- 童婚
  
  - 童婚现象普遍(18岁之前结婚的占35%以上)的国家人均GDP基本都集中在2k以内，大部分是撒哈拉以南的非洲国家。但并不是人均GDP越高，童婚现象就越少，像部分南美洲国家。也不是说人均GDP低了，童婚现象就一定普遍，像大多数东欧及中亚地区的国家。
  
  - 童婚现象是否普遍，不仅要看国家经济是否发达，还要看当地的贫富分化程度，当地的文化以及宗教信仰。就比如说，相同人均GDP的条件下，童婚率低的国家基本上都是GII指数很低的国家。
  
  - 仅从数据上来看，男女平等程度对于童婚现象的影响比人均GDP要更明显，GII指数低于0.3的国家，童婚率不会超过25%，GII指数高于0.6，童婚率就会呈现出一个很明显的上升趋势。

- 青少年产妇护理
  
  - 青少年产妇护理的指标并不会跟随人均GDP以及GII指数有太大的波动，基本上都维持在一个较好水平(MNC指标在50%以上)。大概随着世界经济发展以及国际人道主义活动的展开，产妇护理这种基本的指标大多数国家已经可以达到了。即使是在男女不平等的国家，人们就算是为了孩子的顺利出生，也会给予产妇应有的照顾。
  
  - 少数MNC指标极差(30%以下)的国家，基本可以断定是出于战争或者动乱之中。
  
  - 青少年产妇护理的指标并不像我想象的那样影响到了产妇的死亡率，撒哈拉以南的非洲国家几乎看不出产妇死亡率的波动，但是很明显的是经济较为发达(人均GDP在2k以上)的国家，产妇的死亡率随着MNC指标的升高有明显下降趋势。
  
  - 新生儿的死亡率也体现出与产妇死亡率相同的分布特点。这说明产妇以及新生儿的死亡率最主要的还是受经济条件的限制，而产妇护理指标并不能完全地体现出国家的经济水平。

- 新生儿及产妇死亡率
  
  死亡率这种指标主要就是受医疗水平的限制，而医疗水平则又反映出一个国家的经济水平。随着人均GDP的升高，死亡率呈现出明显的下降趋势。

- 性别不平等指数
  
  GII指数受经济的影响还是很大的，基本上随着人均GDP的增长，GII指数也随之下降。当人均GDP低于1k时，GII指数基本都在0.5以上。但是GII指数还要考虑当地的文化以及宗教因素，像是卡塔尔国，虽然人均GDP在6k以上，但是由于当地执行严格的伊斯兰教规，妇女权利受到严重限制，GII指数达到了0.54。

---

#### 数据来源

- UNICEF [https://www.unicef.org/](https://www.unicef.org/)

- WHO [https://www.who.int/gho/en/](https://www.who.int/gho/en/)

- UNDP [http://hdr.undp.org/en/composite/GII](http://hdr.undp.org/en/composite/GII)

- UNSD https://unstats.un.org/unsd/gender/worldswomen.html

- IMF [https://www.imf.org/en/Publications/SPROLLs/world-economic-outlook-databases](https://www.imf.org/en/Publications/SPROLLs/world-economic-outlook-databases)

- SocialWatch [http://www.socialwatch.org/node/14367](http://www.socialwatch.org/node/14367)

- MDG [http://mdgs.un.org/unsd/mdg/Host.aspx?Content=Data/RegionalGroupings.htm](http://mdgs.un.org/unsd/mdg/Host.aspx?Content=Data/RegionalGroupings.htm)
