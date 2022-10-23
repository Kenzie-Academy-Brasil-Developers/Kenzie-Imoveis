import { MigrationInterface, QueryRunner } from "typeorm";

export class createSchedule1666458548018 implements MigrationInterface {
    name = 'createSchedule1666458548018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Addressses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying NOT NULL, "zipCode" character varying NOT NULL, "number" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_65bbe7a0d9cc0cf6b09620dba32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_9004ab74b495518b3dee4f4222a" UNIQUE ("name"), CONSTRAINT "PK_537b5c00afe7427c4fc9434cd59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(60) NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedules_user_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL DEFAULT now(), "hour" TIME NOT NULL, "propertiesId" uuid, "userId" uuid, CONSTRAINT "PK_a5aea5dea185dc4f29bfa48fc5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold" boolean NOT NULL DEFAULT false, "value" numeric(12,2) NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressesId" uuid, "categoryId" uuid, CONSTRAINT "REL_608102a89edb3a6ca074f4c274" UNIQUE ("addressesId"), CONSTRAINT "PK_0840069eb699a18f3ad6e829ae8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_d7a88d4783fda38b7415ab28bbd" FOREIGN KEY ("propertiesId") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" ADD CONSTRAINT "FK_235777864d81d2513cb8d6118f0" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_608102a89edb3a6ca074f4c274e" FOREIGN KEY ("addressesId") REFERENCES "Addressses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_c35c840c02812719d692907c74c" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_c35c840c02812719d692907c74c"`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_608102a89edb3a6ca074f4c274e"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_235777864d81d2513cb8d6118f0"`);
        await queryRunner.query(`ALTER TABLE "schedules_user_properties" DROP CONSTRAINT "FK_d7a88d4783fda38b7415ab28bbd"`);
        await queryRunner.query(`DROP TABLE "Properties"`);
        await queryRunner.query(`DROP TABLE "schedules_user_properties"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "Categories"`);
        await queryRunner.query(`DROP TABLE "Addressses"`);
    }

}
