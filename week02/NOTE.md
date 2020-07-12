### 学习总结
本周学习了编程语言的一些基础概念，概念部分包括以下内容：  
#### 一、编程语言的基础认识
- 语言分类的方法  
1.形式语言（计算机能够识别的语言：无限制文法、上下文相关文法、上下文无关文法、正则文法）  
2.非形式语言（中文、英文等人类交流使用的语言） 
- 产生式  
BNF范式是一种用递归的思想来表述计算机语言符号集的定义规范法则：::=表示定义；“  ”双引号里的内容表示字符；<>尖括号里的内容表示必选内容；| 竖线两边的是可选内容，相当于or；
示例定义java中的switch语句：
```
<switch statement> ::= switch ( <expression> ) <switch block>
<switch block> ::= { <switch block statement groups><switch labels> }
<switch block statement groups> ::= <switch block statement group> | <switch block statement groups> <switch block statement group>
<switch block statement group> ::= <switch labels><block statements>
<switch labels> ::= <switch label> | <switch labels> <switch label>
<switch label> ::= case <constant expression> :<……> | default :< ……>
```
- 编程语言的性质（图灵完备性）  
1.图灵完备性  
2.动态类型和静态类型  
3.类型系统
- 命令式编程语言的设计方式的五个层级  
1.Atom 原子级，最小组成单位。如变量，自变量，数字等  
2.Expression 表达式。由原子级、运算符、其他辅助运算符构成。如加减乘除  
3.Statement 语句。由Expression、关键字、辅助字符构成如if while for  
4.Structure 结构化，如function class  
5.program 如package、library、module

#### 二、JavaScript类型原理
- number
- string 
- Boolean、null、undefined
- 对象的基础知识


#### 本周总结：
1.从语言概念本身开始学习一本语言的分类和设计方法，从本质出发，有助于我们快速地学习和了解一门语言  
2.JavaScript类型概念大部分内容都可以从mdn上面熟知。但是要注意了解背后的原理，尤其是number类型和string类型。搞清楚number类型中0.1+0.2 为什么不等于0.3，背后的原理和存储方式是什么。同时要搞清楚字符串中编码方式是什么意思，为什么会有这么多的编码方式，有什么区别。  
3.反思：本周由于时间原因，忙于学习其他内容，并没有很好地完成课堂练习，并且对于编程语言的概念也没有继续深入。这有可能会导致基础不扎实，对于基础原理一知半解，后续应当补回来。谨记。