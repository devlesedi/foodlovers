                                           Table "public.campaign"
     Column      |   Type   |                       Modifiers                       | Storage  | Description 
-----------------+----------+-------------------------------------------------------+----------+-------------
 id              | bigint   | not null default nextval('campaign_id_seq'::regclass) | plain    | 
 sfid            | text     |                                                       | extended | 
 name            | text     |                                                       | extended | 
 startdate       | date     |                                                       | plain    | 
 enddate         | date     |                                                       | plain    | 
 description     | text     |                                                       | extended | 
 image__c        | text     |                                                       | extended | 
 campaignpage__c | text     |                                                       | extended | 
 publishdate__c  | date     |                                                       | plain    | 
 type            | text     |                                                       | extended | 
 status          | text     |                                                       | extended | 
 tsv             | tsvector |                                                       | extended | 
Indexes:
    "campaign_pkey" PRIMARY KEY, btree (id)
Has OIDs: no

