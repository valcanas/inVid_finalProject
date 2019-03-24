-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: shortfilmfest
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `genre` (
  `gen_id` int(11) NOT NULL,
  `genre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`gen_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Sci-Fi'),(2,'Fantasy'),(3,'Horror'),(4,'Animation');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jury`
--

DROP TABLE IF EXISTS `jury`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `jury` (
  `jury_id` int(11) NOT NULL AUTO_INCREMENT,
  `jury_name` varchar(100) DEFAULT NULL,
  `jury_photo` varchar(500) DEFAULT NULL,
  `jury_resume` varchar(5000) DEFAULT NULL,
  `jury_pass` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`jury_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jury`
--

LOCK TABLES `jury` WRITE;
/*!40000 ALTER TABLE `jury` DISABLE KEYS */;
INSERT INTO `jury` VALUES (1,'jury1','https://www.biografiasyvidas.com/biografia/p/fotos/platon_2.jpg','Soy el jurado numero uno','jjjj1111'),(2,'jury2','https://estaticos.muyhistoria.es/media/cache/400x300_thumb/uploads/images/article/557ac1f23fafe816120f06cf/da-vinci-cuadrada_0.jpg','Soy el jurado numero dos','jjjj2222'),(3,'jury3','https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/George_Melies.jpg/200px-George_Melies.jpg','Soy el jurado numero tres','jjjj3333'),(4,'jury4','https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/John_Ford_1946.jpg/220px-John_Ford_1946.jpg','Soy el jurado numero cuatro','jjjj4444');
/*!40000 ALTER TABLE `jury` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jury_votes`
--

DROP TABLE IF EXISTS `jury_votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `jury_votes` (
  `jvote_id` int(11) NOT NULL AUTO_INCREMENT,
  `short_id` int(11) NOT NULL,
  `jury_id` int(11) NOT NULL,
  `v_shortfilm` int(11) NOT NULL,
  `v_director` int(11) NOT NULL,
  `v_script` int(11) NOT NULL,
  `v_actor` int(11) NOT NULL,
  `v_actress` int(11) NOT NULL,
  `v_fx` int(11) NOT NULL,
  `v_dop` int(11) NOT NULL,
  PRIMARY KEY (`jvote_id`),
  KEY `short_id` (`short_id`),
  KEY `jury_id` (`jury_id`),
  CONSTRAINT `jury_votes_ibfk_1` FOREIGN KEY (`short_id`) REFERENCES `shortfilms` (`id`),
  CONSTRAINT `jury_votes_ibfk_2` FOREIGN KEY (`jury_id`) REFERENCES `jury` (`jury_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jury_votes`
--

LOCK TABLES `jury_votes` WRITE;
/*!40000 ALTER TABLE `jury_votes` DISABLE KEYS */;
/*!40000 ALTER TABLE `jury_votes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participant`
--

DROP TABLE IF EXISTS `participant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `participant` (
  `part_id` int(11) NOT NULL AUTO_INCREMENT,
  `part_name` varchar(100) DEFAULT NULL,
  `part_rol` varchar(100) DEFAULT NULL,
  `part_photo` varchar(500) DEFAULT NULL,
  `part_resume` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`part_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participant`
--

LOCK TABLES `participant` WRITE;
/*!40000 ALTER TABLE `participant` DISABLE KEYS */;
INSERT INTO `participant` VALUES (1,'Steven Spielberg','Director','https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/stevenspielberg-80s-hat-camera-700x352.jpg','One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood\'s best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer blockbuster with Tiburón (1975), and he has done more to define popular film-making since the mid-1970s than anyone else.'),(2,'Stanley Kubrik','Director','https://m.media-amazon.com/images/M/MV5BMTIwMzAwMzg1MV5BMl5BanBnXkFtZTYwMjc4ODQ2._V1_UX214_CR0,0,214,317_AL_.jpg','Stanley Kubrick was born in Manhattan, New York City, to Sadie Gertrude (Perveler) and Jacob Leonard Kubrick, a physician. His family were Jewish immigrants (from Austria, Romania, and Russia). Stanley was considered intelligent, despite poor grades at school. Hoping that a change of scenery would produce better academic performance, Kubrick\'s father sent him in 1940 to Pasadena, California, to stay with his uncle, Martin Perveler. Returning to the Bronx in 1941 for his last year of grammar school, there seemed to be little change in his attitude or his results. Hoping to find something to interest his son, Jack introduced Stanley to chess, with the desired result. Kubrick took to the game passionately, and quickly became a skilled player. Chess would become an important device for Kubrick in later years, often as a tool for dealing with recalcitrant actors, but also as an artistic motif in his films.'),(3,'Sam Raimi','Director','https://m.media-amazon.com/images/M/MV5BODQ0NjI0NzkzMV5BMl5BanBnXkFtZTYwMDc0ODk1._V1_UY317_CR8,0,214,317_AL_.jpg','Highly inventive U.S. film director/producer/writer/actor Sam Raimi first came to the attention of film fans with the savage, yet darkly humorous, low-budget horror film, Posesión infernal (1981). From his childhood, Raimi was a fan of the cinema and, before he was ten-years-old, he was out making movies with an 8mm camera. He was a devoted fan of The Three Stooges, so much of Raimi\'s film work in his teens, with good friends Bruce Campbell and Rob Tapert, was slapstick comedy based around what they had observed from Stooges movies.'),(4,'George Lucas','Director','https://m.media-amazon.com/images/M/MV5BMTA0Mjc0NzExNzBeQTJeQWpwZ15BbWU3MDEzMzQ3MDI@._V1_UY317_CR0,0,214,317_AL_.jpg','George Walton Lucas, Jr. was raised on a walnut ranch in Modesto, California. His father was a stationery store owner and he had three siblings. During his late teen years, he went to Thomas Downey High School and was very much interested in drag racing. He planned to become a professional racecar driver. However, a terrible car accident just after his high school graduation ended that dream permanently. The accident changed his views on life.');
/*!40000 ALTER TABLE `participant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shortfilms`
--

DROP TABLE IF EXISTS `shortfilms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `shortfilms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL,
  `sinopsis` varchar(5000) DEFAULT NULL,
  `year_release` int(11) NOT NULL,
  `gen_id` int(11) NOT NULL,
  `enable_film` tinyint(1) NOT NULL DEFAULT '0',
  `upload_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL,
  `thumbnail` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_gen_id` (`gen_id`),
  KEY `fk_user_id` (`user_id`),
  CONSTRAINT `fk_gen_id` FOREIGN KEY (`gen_id`) REFERENCES `genre` (`gen_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shortfilms`
--

LOCK TABLES `shortfilms` WRITE;
/*!40000 ALTER TABLE `shortfilms` DISABLE KEYS */;
INSERT INTO `shortfilms` VALUES (50,'Beyond','https://player.vimeo.com/video/72632269?title=0&byline=0&portrait=0','Cortometraje de ciencia ficcion',2014,1,1,'2019-02-17 15:34:56',3,'https://i.vimeocdn.com/video/446532445_640.jpg'),(51,'Scavenger','https://player.vimeo.com/video/288243392?title=0&byline=0&portrait=0','corto sci-fi y animacion',2017,1,1,'2019-02-17 15:41:02',2,'https://i.vimeocdn.com/video/723692811_640.jpg'),(52,'Archangel','https://player.vimeo.com/video/170441907?title=0&byline=0&portrait=0','cortometraje de fantasia',2018,4,1,'2019-02-17 15:43:36',2,'https://i.vimeocdn.com/video/575523800_640.jpg'),(53,'Aeterna','https://player.vimeo.com/video/102493110?title=0&byline=0&portrait=0','cortometraje de fantasía y música',2016,2,1,'2019-02-17 15:48:59',4,'https://i.vimeocdn.com/video/484509176_640.jpg'),(54,'Immersion','https://player.vimeo.com/video/309918376?title=0&byline=0&portrait=0','Cortometraje de fantasía y surf',2019,2,1,'2019-02-17 15:53:16',4,'https://i.vimeocdn.com/video/750414533_640.jpg'),(56,'Ulfur','https://player.vimeo.com/video/73678585?title=0&byline=0&portrait=0','A man is trapped in an endless circle',2016,4,1,'2019-02-19 17:29:30',36,'https://i.vimeocdn.com/video/447837532_640.jpg'),(58,'The One','https://player.vimeo.com/video/75085713?title=0&byline=0&portrait=0','The story behing this film is a stupid Ichat conversation with my buddy Thomas Bertrand. The result is 2 tickets to Tokyo, a script in my pocket, ten days to find comedians and shoot it without any money. I\'m really happy by the experience and will surely do it again !\r\n',2019,2,1,'2019-02-19 17:33:46',36,'https://i.vimeocdn.com/video/449566402_640.jpg'),(59,'Couple','https://player.vimeo.com/video/94723618?color=ffffff&portrait=0','with Julia Ianina e Geraldo Rodrigues\r\nDirected by: Thales.Banzai (BANZAI STUDIO)\r\nProduced by: ParanoidBR e Banzai Studio\r\nD.oP.: William Sossai\r\nProduction Designer: Olivia Helena Sanches\r\nHead of Production: Marcelo Campos\r\n1st AD: Thais Cocca\r\nStyling: Marina Vieira\r\nLocation Scout: Diego Alencar\r\nColorist: Gigio Pelosi\r\nPost Production: Jonathan Post\r\nOriginal Soundtrack: Gabriel Duarte (PUNCH AUDIO)\r\nSound Design, Foley and Mix: Mariano Alvarez (PUNCH AUDIO)\r\nProducers: Egisto Betti, Heitor Dhalia, Tatiana Quintella',2018,3,1,'2019-02-22 13:54:38',3,'https://i.vimeocdn.com/video/474659695_640.jpg'),(111,'Fire Art -hispeed','https://player.vimeo.com/video/9229212?color=777878&title=0&byline=0&portrait=0','Hispeed shortfilm shot on Olympus iSpeed 3',2015,1,1,'2019-03-06 14:46:14',37,'https://i.vimeocdn.com/video/45159799_640.jpg'),(112,'Project Genesis','https://player.vimeo.com/video/58471938?title=0&byline=0&portrait=0','A world populated only by computers that has always looked at our world with resignation and great sense of survival. Their structure, indeed, has always limited their development making even the simplest actions difficult. Today an extraordinary project is about to see the light, clearing new unexpected ways: the world of computers becomes more accessible, simpler, within the reach of everybody. Thanks to \"Project Genesis\" every computer will finally be able to open the door to its dreams, discovering a new dimension: a reality with no more limits and fears. Now they can only begin to live, for real.',2019,1,1,'2019-03-06 16:21:27',66,'https://i.vimeocdn.com/video/405930856_640.jpg'),(114,'FATTIGKUSSEN ','https://player.vimeo.com/video/196199380?title=0&byline=0&portrait=0','whatever',2017,2,1,'2019-03-06 16:29:16',66,'https://i.vimeocdn.com/video/608606489_640.jpg'),(115,'The Mechanic','https://player.vimeo.com/video/145634464?title=0&byline=0&portrait=0','This shot was with the idea to make some of the feeling of the old cartoon series',2017,2,1,'2019-03-07 02:56:13',37,'https://i.vimeocdn.com/video/550048669_640.jpg'),(116,'FATTIGKUSSEN','https://player.vimeo.com/video/196199380?title=0&byline=0&portrait=0','fkghdkhfñsidifhsda lskghsdkgadsg ',2019,3,1,'2019-03-07 12:14:05',69,'https://i.vimeocdn.com/video/608606489_640.jpg'),(117,'Unexpected Discoveries','https://player.vimeo.com/video/72632269?title=0&byline=0&portrait=0','dfhdhaer',2016,1,1,'2019-03-07 12:18:03',70,'https://i.vimeocdn.com/video/608606489_640.jpg'),(123,'prueba3','gjljhglgl','hs fjhasd fkfjh asdkf dfhasldkf kjdfh sakjfh sdjkfhasdf askjfh askjdhf sfjsdhfaklshf kdfh sfkjha fkjsfhsa faskjdfhs adfh sfkjsadfh sdfjhsakjfh sjfh asfkjfhd fjhf JFHAKJH jkh ajhjkhds   dfjhasf jfh fhsdkjfh sffjh fhskhf hf hf sdfhjkdfh sfhsjdfh fhskjhf sfj fjsdfhskj fsjhf fh fh sdjfh fjsfh sjhf sfhf jhf sfsdjf sjhf afklsjfh dsfjhs kfsjhd f',2019,1,0,'2019-04-19 01:23:03',75,'gkljgljkg'),(128,'holaaaa','https://player.vimeo.com/video/72632269?title=0&byline=0&portrait=0','holaaaaaaaa',2019,1,0,'2019-04-22 22:29:14',75,'https://i.vimeocdn.com/video/608606489_640.jpg'),(129,'Ernesto´s Film','https://player.vimeo.com/video/72632269?title=0&byline=0&portrait=0','holaaaaa Ernestoooo',2019,1,0,'2019-04-22 23:12:53',73,'https://i.vimeocdn.com/video/608606489_640.jpg');
/*!40000 ALTER TABLE `shortfilms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) DEFAULT NULL,
  `user_pass` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'User1','1111'),(2,'User2','2222'),(3,'User3','3333'),(4,'User4','4444'),(5,'Admin','e9d47b36f65e2a1d9c32bf17e756345e'),(6,'cvfdv','fcedrvwr3'),(7,'cvfdv','fcedrvwr3'),(8,'Nico','1234'),(9,'Fran','goku'),(10,'Leidy','colombia'),(11,'Noelia','cordoba'),(12,'Jacobo','galicia'),(13,'Felix','malaga'),(14,'Lola','malaga'),(15,'Lola','malaga'),(16,'Ilya','rusia'),(17,'Janet','argentina'),(18,'Maia','asuncion'),(19,'Maia','asuncion'),(20,'Maia','asuncion'),(21,'Regina','granada'),(22,'Josema','espana'),(23,'Jose','malaga'),(24,'Matias','alhaurin'),(25,'Martin','alhaurin'),(26,'Maui','alhaurin'),(27,'Martin','arroyo'),(28,'Alberto','14º43º21'),(29,'ewrqcew','242143212'),(30,'code','12345'),(31,'Leidy Johana','codespace'),(32,'Leidy Johana','codespace'),(33,'Fran Landin','gokuvegeta'),(34,'Janet Rodriguez','matias'),(35,'Ernesto','codespace'),(36,'Janet','mami'),(37,'prueba','17ea289b62561221ad59cd2e19dbf55d'),(38,'erv','00f9b93681b75d627161c5396ddc2fd3'),(39,'rodja','019949e3cb0085a35c360e93cc2d9b34'),(40,'Rosalia','306af97e419dedf1fb58d2663510f431'),(41,'Paco','ffc74000888b7277345b2edbefa97faf'),(42,'Carlos Matias','e72427a074245c077727a452b5db9918'),(43,'Jose Martin','3a067c2d7be9b85d88141e664f139eeb'),(44,'Maui Hernan','f673a8f6fd5c432540d6e8fa877d7d38'),(45,'Maia Paula','10c8c415a49bd6bf379ae451186ee2b1'),(46,'Martin Ivan','bf5c4fdeb121dfc938e5d24c6ce9ff3e'),(47,'Martin Rodriguez','2fdd949e8bf44c81c70988b08cfb4b3a'),(48,'Felix','295f9b79707bb5163da32cddfc8d0646'),(49,'Jacobo Gallego','40f7e4d31c5d08217315c582aae2537d'),(50,'Ilya Ruso','27c613574d2901177aa4cf8a0efeea41'),(51,'Lola Madre','03869605ed93ee8449b40d41a1cacd44'),(52,'Regina Nueva','82122be31bf528387d196b40f9bbcd36'),(53,'Regina otra','44d9a7aed72892a8523f719a479d447b'),(54,'User33','62c2c311676300baabd39063d8bc28da'),(55,'tito','c8526be5232780cfd27793af04517d09'),(56,'titotito','12cff9ed7e7f081dbcc4f37cfaa0ef1a'),(57,'totototo','37343799fd098520879daecdc54315bd'),(58,'titi','ffc74000888b7277345b2edbefa97faf'),(59,'tititito','8bf85114d1d3a4a11617782e9cd3cd11'),(60,'arrr','db0e21e68c9fcd68734ea1e92390d36e'),(61,'va','74d7ab3f886b45be144621804e3fe03f'),(62,'tituriru','7421aa46f573ad44bb5880dc5ac222c0'),(63,'FranFran','2a03559ff8966199d1d1eba0a1ba6ace'),(64,'JacobGal','b37ac4b9c41e904a347c3032a8ebc255'),(65,'Gato Felix','a36a9034f206f920e869d8517177bda8'),(66,'ERV_ERV','a987aca919b2a27577981381def0804f'),(67,'Admin2','e9d47b36f65e2a1d9c32bf17e756345e'),(68,'UserBoot','c8b41ec98ba10fa342f2bf9a690e99e9'),(69,'Josema','8d1ac9ea4731e320b25f6bc908e1733d'),(70,'Jose','8d1ac9ea4731e320b25f6bc908e1733d'),(71,'Code','162c51b1f1d5b243c8d31465286862b3'),(72,'paula','c6652ea5980d6b305845e1e846dfaf2b'),(73,'ernesto_valiente','64c81255135c53fee21fa151cce6cd70'),(74,'pacoAlias','64c81255135c53fee21fa151cce6cd70'),(75,'lolaGalan','64c81255135c53fee21fa151cce6cd70'),(76,'reginaFernandez','64c81255135c53fee21fa151cce6cd70'),(77,'jacoboRomero','64c81255135c53fee21fa151cce6cd70'),(78,'jacobinho','6a491c0eac66c1fabc45c2557be776b7'),(79,'janetRodriguez','64c81255135c53fee21fa151cce6cd70');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_votes`
--

DROP TABLE IF EXISTS `user_votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_votes` (
  `uvote_id` int(11) NOT NULL AUTO_INCREMENT,
  `short_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `like_shortfilm` int(11) NOT NULL,
  PRIMARY KEY (`uvote_id`),
  KEY `short_id` (`short_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_votes_ibfk_1` FOREIGN KEY (`short_id`) REFERENCES `shortfilms` (`id`),
  CONSTRAINT `user_votes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_votes`
--

LOCK TABLES `user_votes` WRITE;
/*!40000 ALTER TABLE `user_votes` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_votes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-23 23:00:55
