CREATE DATABASE VOOH;
USE VOOH;

create table Users(
	idUsers INT PRIMARY KEY,
    username VARCHAR(99) UNIQUE NOT NULL,
    email VARCHAR(99) UNIQUE NOT NULL,
    passcode VARCHAR(99) NOT NULL,
    nome_completo VARCHAR(99 )NOT NULL,
    auth_token VARCHAR(99) 
);

