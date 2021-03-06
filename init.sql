
CREATE TABLE IF NOT EXISTS tokens (
    userId           BIGSERIAL,
    externalUserId   TEXT,
    token            TEXT NOT NULL UNIQUE,
    created          TIMESTAMP DEFAULT now()
  );

CREATE TABLE IF NOT EXISTS wallet (
    userId       BIGINT,
    offerId      BIGINT
  );

CREATE TABLE IF NOT EXISTS wishlist (
    userId       BIGINT,
    productId    BIGINT
  );

CREATE TABLE IF NOT EXISTS picture (
    id           BIGSERIAL,
    userId       BIGINT,
    url          TEXT,
    publishDate  timestamp default current_timestamp
  );

CREATE TABLE IF NOT EXISTS contact (
    id              BIGSERIAL,
    firstName       TEXT,
    lastName        TEXT,
    email           TEXT,
    mobilePhone     TEXT,
    leadsource      TEXT,
    accountid       TEXT,
    pictureURL__c   TEXT,
    preference__c   TEXT,
    size__c         TEXT,
    loyaltyid__c    TEXT,
    password__c     TEXT,
    createddate     timestamp
  );

CREATE TABLE IF NOT EXISTS interaction__c (
    id                      BIGSERIAL,
    contact__loyaltyid__c   TEXT,
    campaign__c             TEXT,
    product__c              TEXT,
    type__c                 TEXT,
    name__c                 TEXT,
    picture__c              TEXT,
    points__c               double precision,
    createddate             timestamp
  );

CREATE TABLE IF NOT EXISTS campaign (
    id              BIGSERIAL PRIMARY KEY,
    sfId            TEXT,
    name            TEXT,
    startdate       DATE,
    enddate         DATE,
    description     TEXT,
    image__c        TEXT,
    campaignpage__c TEXT,
    publishdate__c  DATE,
    type            TEXT,
    status          TEXT
  );

CREATE TABLE IF NOT EXISTS product2 (
    id              BIGSERIAL PRIMARY KEY,
    name            TEXT,
    description     TEXT,
    image__c        TEXT,
    productpage__c  TEXT,
    publishdate__c  DATE
  );

CREATE TABLE IF NOT EXISTS store__c (
    id                      BIGSERIAL PRIMARY KEY,
    name                    TEXT,
    location__latitude__s   TEXT,
    location__longitude__s  TEXT
  );

INSERT INTO campaign (id, name, description, image__c, type, status) VALUES
    (1, 'Sausage And Cheese French Bread Pizza', 'Get $10.00 off of Sausage And Cheese French Bread Pizza', 'https://vgbots.s3.amazonaws.com/1433636604664', 'Offer', 'In Progress'),
    (2, '10% of Cristina’s Quick And Easy Pizza Dough', 'Twice as much Eco!', 'https://vgbots.s3.amazonaws.com/1433637118791', 'Offer', 'In Progress'),
    (3, '10% off Caramelized Onion & Prosciutto Pizza', 'Caramelized Onion & Prosciutto Pizza...', 'https://vgbots.s3.amazonaws.com/1433637198157', 'Offer', 'In Progress'),
    (4, 'Buy 2 Get 1 Free: Kimchi Pork Belly Pizza', 'Purists, Foodies and Afficionados: Buy 2 Bars Get 1 Free', 'https://vgbots.s3.amazonaws.com/1433637292770', 'Offer', 'In Progress'),
    (5, 'Buy 4 Get 6: Bbq Chicken And Cilantro French Bread Pizza', 'Buy 4, get 6 of of the city''s finest native chocolatiers, old and new: Tcho, Dandelion, Recchiutti, Ghirardelli, Sharffenburger, Guittard.', 'https://vgbots.s3.amazonaws.com/1433637403335', 'Offer', 'In Progress'),
    (6, 'Grilled Pizza With Harissa And Herb Salad', 'Grilled Pizza With Harissa And Herb Salad', 'https://vgbots.s3.amazonaws.com/1433637659952', 'Offer', 'In Progress'),
    (7, 'Three-Cheese Pizza With Pancetta And Mushrooms', 'Three-Cheese Pizza With Pancetta And Mushrooms.', 'https://vgbots.s3.amazonaws.com/1433637741305', 'Offer', 'In Progress'),
    (8, 'Chocolate Pizza', 'Are you nuts?', 'https://vgbots.s3.amazonaws.com/1433637818562', 'Offer', 'In Progress');

INSERT INTO product2 (id, name, description, image__c) VALUES
    (1, 'Caramelized Almonds', 'Addictive treats from the popular new boutique chocolatier in San Francisco''s Mission District.', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/nibs/feve1.jpg'),
    (2, 'Chocolate Stout', 'For the chocolate tilted beer lover, as chocolate stout that is sure to refresh.', 'https://node-goto.s3.amazonaws.com/1429733161225'),
    (3, 'Dandelion Assortment', 'Bring the flavor of San Francisco boutique chocolate into your home, or present as a gift to the foodie in your life.', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/nibs/dandelion2.jpg'),
    (4, 'Dandelion Small Batch', 'Experience the buzz around San Francisco''s newest boutique chocolatier. These beans are slow roasted whole for unparalleled flavor depth.', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/nibs/dandelion1.jpg'),
    (5, 'Matzo Crunch', 'A uniquely crunchy treat. So good we had to offer it all year round.', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/nibs/matzo.jpg'),
    (6, 'Patric IN-NIB-ITABLE', 'For the Nibs lovers in your life: a bar of 72% cacao, dark, sweet and strewn with crunchy nibs.', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/nibs/patric2.jpg'),
    (7, 'Patric Limited Edition', 'Salt and chocolate meet in a single bar. For sophisticated palettes.', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/nibs/patric3.jpg'),
    (8, 'Patric Mizzou Crunch', 'Some love smooth, some love crunch. This is a crunch! Lively on the palette.', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/nibs/patric1.jpg');

INSERT INTO store__c (id, name, location__latitude__s, location__longitude__s) VALUES
    (1, 'Marquis', 37.785143, -122.403405),
    (2, 'Hilton', 37.786164, -122.410137),
    (3, 'Hyatt', 37.794157, -122.396311);
