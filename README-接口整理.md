1. 首页 都不含图片 是文字说明

1. 送恋人/爱情鲜花 右侧数据
POST  https://m.hua.com/home/GetProductListPrice

2. 一秒选花-送恋人。。。
POST  https://m.hua.com/home/GetProductListPrice
POST  https://m.hua.com/home/GetProductListPrice
POST  https://m.hua.com/home/GetProductListPrice
form date 中 itemcodes 不同
。。。

Q:本地的json数据只能用ajax的get方式获取，而post不能，这是为啥？
A:如果是静态资源，只能通过get获取，相当于是加载资源，如果是服务器进行处理post请求，那么可能也是可以的。
但是一般不传递数据，只是请求数据或是文件就是用get就可以了。
