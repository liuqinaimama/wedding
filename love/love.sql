#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库,如果存在
DROP DATABASE IF EXISTS products;
#创建数据库，设置存储的编码
CREATE DATABASE products CHARSET=UTF8;
#进入该数据库
USE products;
#创建保存套餐数据的表
#DROP TABLE quality;
CREATE TABLE quality(
  qid TINYINT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  price VARCHAR(8),
  sold VARCHAR(10),
  pic VARCHAR(100),
  aid VARCHAR(100)
);
#插入数据
INSERT INTO quality VALUES(null,'「定制」个性小定制',5000,479,"img/c/1.jpg",0);
INSERT INTO quality VALUES(null,'「爱情影院」·VIP电影包房惊喜套餐',9800,1502,"img/c/2.jpg",1);
INSERT INTO quality VALUES(null,'「深海之谜」·心形灯海浪漫策划',8800,2966,"img/c/3.jpg",1);
INSERT INTO quality VALUES(null,'「浪漫满屋」·浪漫惊喜策划',8800,1760,"img/c/4.jpg",1);
INSERT INTO quality VALUES(null,'「缤纷世界」KTV浪漫惊喜策划',6800,1167,"img/c/5.jpg",1);
INSERT INTO quality VALUES(null,'「Color Of Love」·浪漫露台主题',7800,1038,"img/c/6.jpg",1);
INSERT INTO quality VALUES(null,'「糖果乐园」大气花台甜美浪漫策划',15800,1124,"img/c/7.jpg",1);
INSERT INTO quality VALUES(null,'「你是我的倾城时光」室内花房主题',13800,873,"img/c/8.jpg",1);
INSERT INTO quality VALUES(null,'「爱夜梦里」花房浪漫惊喜策划',15800,872,"img/c/9.jpg",2);
INSERT INTO quality VALUES(null,'「听见花开」·浪漫惊喜策划',8800,744,"img/c/10.jpg",2);
INSERT INTO quality VALUES(null,'「静思·花语」梦幻露台花海主题',12800,624,"img/c/11.jpg",2);
INSERT INTO quality VALUES(null,'「秘境之林」森系浪漫求婚套餐',15800,298,"img/c/12.jpg",2);
INSERT INTO quality VALUES(null,'「浪漫满屋」·浪漫惊喜策划',8800,1760,"img/c/c280.jpg",2);
INSERT INTO quality VALUES(null,'「梦幻国度」户外城堡灯海主题',15800,364,"img/c/c2.jpg",2);
INSERT INTO quality VALUES(null,'「简爱」 KTV浪漫惊喜策划',8800,221,"img/c/c5_3.jpg",2);
INSERT INTO quality VALUES(null,'「呓语」沙滩花房惊喜套餐',13800,362,"img/c/c6_1.jpg",3);
INSERT INTO quality VALUES(null,'「初遇」创意餐厅求婚套餐',8800,156,"img/c/c6_2.jpg",3);
INSERT INTO quality VALUES(null,'「爱的华尔兹」快闪惊喜策划',11800,420,"img/c/c6_3.jpg",3);
INSERT INTO quality VALUES(null,'「Croatian」户外创意克罗地亚凤格主题套餐',15800,22,"img/c/c7_1.jpg",3);
INSERT INTO quality VALUES(null,'「轻纱掩红颜」清新静谧求婚套餐',13800,128,"img/c/c7_2.jpg",3);
INSERT INTO quality VALUES(null,'「甜蜜爱之屋」·室内粉色系求婚',7800,238,"img/c/c7_3.jpg",3);
INSERT INTO quality VALUES(null,'「定制」专属高端定制',30000,671,"img/c/dz_1.jpg",4);
INSERT INTO quality VALUES(null,'「Moment」户外创意花海主题',28800,549,"img/c/dz_2.jpg",4);
INSERT INTO quality VALUES(null,'「Lovely World」户外城堡主题',25800,697,"img/c/dz_3.jpg",4);
INSERT INTO quality VALUES(null,'「浩瀚星河」户外星空主题',35800,523,"img/c/dz_4.jpg",4);
INSERT INTO quality VALUES(null,'「时空尽头」户外创意星球主题',21800,563,"img/c/dz_5.jpg",4);
INSERT INTO quality VALUES(null,'「空中花园」室内小清新定制',35800,431,"img/c/dz_6.jpg",4);
INSERT INTO quality VALUES(null,'「微光觅影」浪漫仙境',38800,697,"img/c/dz_7.jpg",4);
INSERT INTO quality VALUES(null,'「 龙猫——可遇见」 宫崎骏动漫主题套餐',26800,18,"img/c/dz_8.jpg",4);
INSERT INTO quality VALUES(null,'「日月星辰」奢华创意求婚',198800,84,"img/c/dz_12.jpg",4);
#创建保存案例数据的表
#DROP TABLE cases;
CREATE TABLE cases(
  cid TINYINT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  adds VARCHAR(50),
  pic VARCHAR(50),
  aid VARCHAR(100)
);
#插入数据
INSERT INTO cases VALUES(null,'圣诞恋曲——深圳浪漫小区求婚',"深圳","img/c/al_13.jpg",0);
INSERT INTO cases VALUES(null,'遇见你，是我的小幸运——浪漫花房求婚',"武汉","img/c/al_14.jpg",1);
INSERT INTO cases VALUES(null,'爱不停转——浪漫摩天轮求婚',"广州","img/c/al_15.jpg",1);
INSERT INTO cases VALUES(null,'Yes，I Do——宁波浪漫餐厅求婚',"宁波","img/c/al_1.jpg",1);
INSERT INTO cases VALUES(null,'浪漫沙滩——与你情定三亚',"三亚","img/c/al_16.jpg",1);
INSERT INTO cases VALUES(null,'浪漫童话无锡粉色城堡主题求婚',"无锡","img/c/al_17.jpg",1);
INSERT INTO cases VALUES(null,'一见钟情 挚爱万年',"成都市","img/c/al_2.jpg",1);
INSERT INTO cases VALUES(null,'微光寻你——重庆森系主题浪漫求婚',"重庆市     灯光、女主惊讶感动","img/c/al_3.jpg",2);
INSERT INTO cases VALUES(null,'日月星辰——重庆浪漫霸气场景求婚',"重庆市     舞台、大场景","img/c/al_4.jpg",2);
INSERT INTO cases VALUES(null,'炙热山城 挚爱永恒',"重庆市","img/c/al_5.jpg",2);
INSERT INTO cases VALUES(null,'从校服走向婚纱——重庆餐厅浪漫求婚',"重庆市     花房、餐厅","img/c/al_6.jpg",2);
INSERT INTO cases VALUES(null,'情定圣托尼里',"湘乡市","img/c/al_7.jpg",2);
INSERT INTO cases VALUES(null,'自从遇见你，余生都是你~——厦门浪漫餐厅露台求婚',"厦门","img/c/al_8.jpg",3);
INSERT INTO cases VALUES(null,'浪漫童话无锡粉色城堡主题求婚',"无锡","img/c/al_9.jpg",3);
INSERT INTO cases VALUES(null,'对你一眼万年——成都浩瀚星河求婚',"成都市","img/c/al_10.jpg",3);
INSERT INTO cases VALUES(null,'甜言蜜语，为爱执笔——重庆浪漫餐厅求婚',"重庆市","img/c/al_11.jpg",3);
INSERT INTO cases VALUES(null,'最是一抹梨花香——深圳灯海焰火花房求婚',"深圳     灯海、花房  ","img/c/al_12.jpg",3);
#DROP TABLE user;
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(11),
  upwd VARCHAR(18),
  name VARCHAR(32)
);
INSERT INTO user VALUES(null,'1888888888',"123123","金冠超");