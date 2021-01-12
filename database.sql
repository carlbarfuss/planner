CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "token" VARCHAR (1000),
    "email" VARCHAR (1000),
    "age" INT,
    "retirement_age" INT, 
    "target_income" INT,
    "savings" INT,
    "saved_monthly" INT,
    "inflation_rate" DECIMAL(4,2) DEFAULT 2.00,
    "rate_of_return" DECIMAL(4,2) DEFAULT 10.00
);

CREATE TABLE "expenses" (
	"id" SERIAL PRIMARY key,
	"user_id" INT,
	"liability_name" VARCHAR(100),
	"liability_monthly_cost" DECIMAL(8,2),
	FOREIGN KEY (user_id) REFERENCES "user"(id)
);

CREATE TABLE "income_streams" (
	"id" SERIAL PRIMARY key,
	"user_id" INT,
	"income_name" VARCHAR(100),
	"income_monthly_value" DECIMAL(8,2),
	FOREIGN KEY (user_id) REFERENCES "user"(id)
);

CREATE TABLE "fed_data" (
	"id" SERIAL PRIMARY key,
	"age_min" int,
	"age_max" int,
	"average_savings" int,
	"median_savings" int,
	"99th_percentile_savings" int
);


INSERT INTO fed_data ("age_min", "age_max", "average_savings", "median_savings", "99th_percentile_savings")
VALUES (18, 24, 4745.25, 0.00, 101000.00), (25, 29, 9408, 0, 93000), (30, 34, 21731, 2000, 2041000), (35, 39, 48710, 2500, 500000), (40, 44, 101899, 6950, 1097000),
(45, 49, 148950, 10000, 1794000), (50, 54, 146068, 10000, 1624000), (55, 59, 223493, 15000, 2583000), (60, 64, 221451, 2000, 2520000), (65, 69, 206819, 0, 2683000), 
(70, 74, 203964, 0, 2739000), (75, 79, 143613, 0, 2300000), (80, 999, 128216, 0, 2720000);

DROP TABLE "income_streams";