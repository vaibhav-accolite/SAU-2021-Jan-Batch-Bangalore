create database worldcup;

use worldcup;

create table bowlers (
    playerId int not null,
    teamId int not null,
    wickets int,
    name varchar(20),
    jerseyNo int not null,
    primary key (playerId)
);

create table batsman (
    playerId int not null,
    teamId int not null,
    runs int,
    name varchar(20),
    jerseyNo int not null,
    primary key (playerId)
);

alter table batsman
modify column teamId varchar(20);

alter table bowlers
modify column teamId varchar(20);


insert into batsman 
values (1,'india',50,'virat kohli',19);

insert into batsman
values (2,'india',50,'rohit sharma',1);

insert into batsman
values (3,'india',20,'dhoni',2);

insert into batsman
values (4,'india',100,'rahul',5);

insert into batsman
values (5,'india',76,'hardik',6);

insert into batsman
values (6,'india',86,'rishabh',7);

insert into batsman
values (7,'india',20,'ravindra',8);

insert into batsman
values (8,'australia',30,'steve',8);

insert into batsman
values (9,'australia',40,'david',1);

insert into batsman
values (10,'australia',86,'aaron',2);

insert into batsman
values (11,'australia',76,'david',3);

insert into batsman
values (12,'australia',10,'maxwell',4);

insert into batsman
values (13,'australia',59,'pat',5);

insert into batsman
values (14,'australia',71,'adam',6);

insert into batsman
values (15,'australia',102,'starc',7);

insert into batsman 
values (20,'pakistan',60,'babar azam',1);

insert into batsman 
values (21,'pakistan',64,'afridi',2);

insert into batsman 
values (22,'pakistan',74,'amir',3);

insert into batsman 
values (23,'pakistan',21,'ahmed',4);

insert into batsman 
values (24,'pakistan',67,'imad',5);

insert into batsman 
values (25,'pakistan',14,'fahkar',6);

insert into batsman 
values (26,'pakistan',7,'malik',7);


insert into bowlers
value (16,'india',2,'rahul',9);

insert into bowlers
value (17,'india',1,'dhoni',10);

insert into bowlers
value (18,'india',5,'hardik',11);

insert into bowlers
values (1,'india',3,'virat kohli',19);

insert into bowlers
values (2,'india',2,'rohit sharma',1);


insert into bowlers
values (8,'australia',4,'steve',8);

insert into bowlers
values (11,'australia',0,'david',3);

insert into bowlers
values (13,'australia',1,'pat',5);

insert into bowlers
values (9,'australia',3,'david',1);

insert into bowlers
values (12,'australia',1,'maxwell',4);


create table teamscore (
    sino int not null auto_increment,
    teamId varchar(20),
    score int not null,
    iswin int not null,
    matchId int not null, 
    primary key (sino)
);

insert into teamscore (teamId,score,iswin,matchId)
value ('india',145,1,123);

insert into teamscore (teamId,score,iswin,matchId)
value ('australia',130,0,123);

insert into teamscore (teamId,score,iswin,matchId)
value ('india',256,1,124);

insert into teamscore (teamId,score,iswin,matchId)
value ('australia',240,0,124);

insert into teamscore (teamId,score,iswin,matchId)
value ('pakistan',120,0,125);

insert into teamscore (teamId,score,iswin,matchId)
value ('srilanks',160,1,125);

insert into teamscore (teamId,score,iswin,matchId)
value ('srilanks',176,0,126);

insert into teamscore (teamId,score,iswin,matchId)
value ('india',256,1,126);

insert into teamscore (teamId,score,iswin,matchId)
value ('pakistan',180,0,127);

insert into teamscore (teamId,score,iswin,matchId)
value ('australia',203,1,127);

insert into teamscore (teamId,score,iswin,matchId)
value ('england',246,1,128);

insert into teamscore (teamId,score,iswin,matchId)
value ('srilanka',245,0,128);

insert into teamscore (teamId,score,iswin,matchId)
value ('south africa',271,1,129);

insert into teamscore (teamId,score,iswin,matchId)
value ('england',246,0,129);



select * 
from batsman
order by runs desc
limit 5;


select * 
from bowlers
order by wickets desc
limit 5;

select teamId as Country, avg(score) as AverageScore
from teamscore
group by teamId
order by avg(score) desc;


select * 
from batsman
where teamId = 'pakistan';

update batsman 
set runs = runs + 10
where teamId  in (
                select teamId
                from (
                    select teamId ,
                    row_number() over (order by average ) as rn
                    from (
                        select avg(score) as average, teamId
                        from teamscore
                        group by teamId
                        -- order by avg(score)
                    ) t1
                    group by teamId
                ) t
                where rn = 1
                );

--  this command is used to run on terminal 
delimiter //


create procedure gethighestscore(in country varchar(20),out result int) 
begin
select score into result
from teamscore 
where teamId = country
order by score desc
limit 1;
end //

--  setting delimiter back to ;
delimiter ;

call gethighestscore('india',@result);


