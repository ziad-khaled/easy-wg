-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema easywg_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema easywg_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `easywg_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `easywg_db` ;

-- -----------------------------------------------------
-- Table `easywg_db`.`user_credential`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easywg_db`.`user_credential` (
  `wg_member_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `mobil_no` VARCHAR(255) NOT NULL,
  `status` BINARY(1) NULL DEFAULT NULL,
  PRIMARY KEY (`wg_member_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `easywg_db`.`announcement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easywg_db`.`announcement` (
  `announcement` LONGTEXT NOT NULL,
  `announcement_date` DATE NULL DEFAULT NULL,
  `wg_member_id` INT NOT NULL,
  PRIMARY KEY (`wg_member_id`),
  CONSTRAINT `wg_member_id_f1`
    FOREIGN KEY (`wg_member_id`)
    REFERENCES `easywg_db`.`user_credential` (`wg_member_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `easywg_db`.`common_purchases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easywg_db`.`common_purchases` (
  `purchase_id` INT NOT NULL,
  `wg_member_id` INT NOT NULL,
  `time` TIME NULL DEFAULT NULL,
  `product_name` VARCHAR(45) NOT NULL,
  `product_price` FLOAT NOT NULL,
  `upload_receipt` BINARY(1) NOT NULL,
  PRIMARY KEY (`purchase_id`, `wg_member_id`),
  INDEX `wg_member_id_f2_idx` (`wg_member_id` ASC) VISIBLE,
  CONSTRAINT `wg_member_id_f2`
    FOREIGN KEY (`wg_member_id`)
    REFERENCES `easywg_db`.`user_credential` (`wg_member_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `easywg_db`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easywg_db`.`tasks` (
  `wg_member_id` INT NOT NULL,
  `date` DATE NULL DEFAULT NULL,
  `status` TINYINT NULL DEFAULT NULL,
  `comment` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`wg_member_id`),
  CONSTRAINT `wg_member_id`
    FOREIGN KEY (`wg_member_id`)
    REFERENCES `easywg_db`.`user_credential` (`wg_member_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `easywg_db`.`wg_overview`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easywg_db`.`wg_overview` (
  `wg_member_id` INT NOT NULL,
  `wg_joining_id` INT NOT NULL,
  `wg_name` VARCHAR(45) NOT NULL,
  `room_no` VARCHAR(45) NOT NULL,
  `member_privileges` INT NULL DEFAULT NULL,
  `monthly_expenditure` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`wg_member_id`),
  CONSTRAINT `wg_member_id_f0`
    FOREIGN KEY (`wg_member_id`)
    REFERENCES `easywg_db`.`user_credential` (`wg_member_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
