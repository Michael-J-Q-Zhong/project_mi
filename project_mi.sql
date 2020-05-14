# Host: localhost  (Version: 5.7.26)
# Date: 2020-05-12 21:07:24
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#
create database project_mi
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `typeId` char(3) NOT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`),
  KEY `typeId` (`typeId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

REPLACE INTO `goodsinfo` VALUES ('001','Redmi K30 Pro 变焦版','007',3799,100,'双模5G，骁龙865，弹出全面屏，索尼6400万双光学防抖四摄','2b33b75a39248b5195c41c9a16bce9fb.jpg',NULL,'pms_1584945309.54424595.jpg','pms_1584945309.62797925.jpg','pms_1584945309.72427891.jpg','pms_1584945309.53312067.jpg','pms_1584945309.70415494.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('002','Redmi K30 Pro','007',2999,100,'双模5G，骁龙865，弹出全面屏，6400万高清四摄','90585539f66ccd4356aeac6e7bbb5dad.jpg','','pms_1584946022.16048616.jpg','pms_1584946022.24078871.jpg\r\n','pms_1584946022.13737232.jpg','pms_1584946022.1485742.jpg','pms_1584946022.15325204.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('003','小米10','012',3999,100,'骁龙865/1亿像素相机','4f3a01fbab162952324826197f9ecd76.jpg','','pms_1581494372.61732687.jpg','pms_1581494382.36045479.jpg','pms_1581494385.93393997.jpg','pms_1581494379.77789316.jpg','pms_1581494382.43763430.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('004','小米10Pro','012',4999,100,'骁龙865/50倍变焦','8e0fb5540c32c703813e21894d104567.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('005','腾讯黑鲨游戏手机3','012',3499,100,'骁龙865/270Hz触控采样率','d62a97b5c65e2f62ffd7cafcb6dd3361.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('006','腾讯黑鲨游戏手机3 Pro','012',4699,100,'骁龙865/升降式按键','89a7f5ab007583a2cbd8fd759f2262ea.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('007','Redmi Note 8','012',899,100,'千元4800万四摄','465ea7594d174311d85ba9b58b4c7137.jpg','999',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('008','Redmi Note 8 Pro','012',1199,100,'6400万全场景四摄','8a99bc6d6d5743a186950f235cca930e.jpg','1399',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('009','小米10Pro','008',4999,100,'骁龙865/50倍变焦','8e0fb5540c32c703813e21894d104567.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('010','小米10','008',3999,100,'骁龙865/1亿像素相机','4f3a01fbab162952324826197f9ecd76.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('011','小米CC9','008',1499,100,'3200万自拍，4800万三摄','027867a38d4fd4d782b16118e4197985.jpg','1799',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('012','小米CC9e','008',1299,100,'3200万自拍，4800万三摄','d894ae533bc28b59b172e3d46581cefd.jpg','1599',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('013','Redmi K30 Pro','009',2999,100,'双模5G，骁龙865，弹出全面屏，6400万高清四摄','90585539f66ccd4356aeac6e7bbb5dad.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('014','Redmi K30 Pro 变焦版','009',3799,100,'双模5G，骁龙865，弹出全面屏','8dc70db2efd09bb00c29745aa2ab9173.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('015','Redmi K30','009',1599,100,'120Hz流速屏，全速热爱','61466261e8001f3f18991f6abff46ccf.jpg','1699',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('016','Redmi K30 5G','009',1999,100,'双模5G，120Hz流速屏','b6ea8d70aa2ebeabd41d5596b3498768.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('017','Redmi 8A','009',599,100,'5000mAh超长续航','b6ea8d70aa2ebeabd41d5596b3498768.jpg','699',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('018','Redmi Note 8','009',899,100,'千元4800万四摄','465ea7594d174311d85ba9b58b4c7137.jpg','999',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('019','Redmi Note 8 Pro','009',1199,100,'6400万全场景四摄','8a99bc6d6d5743a186950f235cca930e.jpg','1399',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('020','Redmi 8','009',699,100,'5000mAh超长续航','52843ff7a32a371751366bdafddfd446.jpg','799',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('021','小米平板4','010',1399,100,'大屏幕，长续航，追剧更尽兴','1f60a0afff47ac32b7a1659e2b24c19a.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('022','小米10','011',3999,100,'骁龙865/1亿像素相机','4f3a01fbab162952324826197f9ecd76.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('023','小米10Pro','011',4999,100,'骁龙865/50倍变焦','8e0fb5540c32c703813e21894d104567.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('024','Redmi K30 Pro','011',2999,100,'双模5G，骁龙865，弹出全面屏，6400万高清四摄','90585539f66ccd4356aeac6e7bbb5dad.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('025','Redmi K30 Pro 变焦版','011',3799,100,'双模5G，骁龙865，弹出全面屏','8dc70db2efd09bb00c29745aa2ab9173.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('026','腾讯黑鲨游戏手机3','011',3499,100,'骁龙865/270Hz触控采样率','d62a97b5c65e2f62ffd7cafcb6dd3361.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('027','腾讯黑鲨游戏手机3 Pro','011',4699,100,'骁龙865/升降式按键','89a7f5ab007583a2cbd8fd759f2262ea.jpg','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

#
# Structure for table "goodstype"
#

CREATE TABLE `goodstype` (
  `typeid` char(3) NOT NULL,
  `goodstype` varchar(20) NOT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodstype"
#

REPLACE INTO `goodstype` VALUES ('001','手机'),('002','家电'),('003','智能'),('004','搭配'),('005','配件'),('006','周边'),('007','明星产品Max'),('008','小米手机'),('009','红米手机'),('010','追剧神器'),('011','骁龙865'),('012','明星产品Min');

#
# Structure for table "shoppingcart"
#

CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#


#
# Structure for table "usermessage"
#

CREATE TABLE `usermessage` (
  `phonenumber` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `userpass` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`phonenumber`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "usermessage"
#

REPLACE INTO `usermessage` VALUES ('17688503514','AliceCcc','AliceCcc');
