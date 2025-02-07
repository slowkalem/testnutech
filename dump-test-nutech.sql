--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3

-- Started on 2025-02-08 04:23:47

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3376 (class 1262 OID 57412)
-- Name: test-nutech; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "test-nutech" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE "test-nutech" OWNER TO postgres;

\connect -reuse-previous=on "dbname='test-nutech'"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

-- CREATE SCHEMA public;


-- ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3377 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

-- COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 57420)
-- Name: banner; Type: TABLE; Schema: public; Owner: postgres
--
DROP TABLE IF EXISTS banner;
CREATE TABLE public.banner (
    id character varying NOT NULL,
    banner_name character varying,
    banner_image character varying,
    description character varying,
    created_on timestamp without time zone,
    updated_on timestamp without time zone
);


ALTER TABLE public.banner OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 57427)
-- Name: service; Type: TABLE; Schema: public; Owner: postgres
--
DROP TABLE IF EXISTS service;
CREATE TABLE public.service (
    id character varying NOT NULL,
    service_code character varying,
    service_name character varying,
    service_icon character varying,
    service_tariff character varying,
    created_on timestamp without time zone,
    updated_on timestamp without time zone
);


ALTER TABLE public.service OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 57434)
-- Name: transaction; Type: TABLE; Schema: public; Owner: postgres
--
DROP TABLE IF EXISTS transaction;
CREATE TABLE public.transaction (
    id character varying NOT NULL,
    user_id character varying,
    invoice_number character varying,
    transaction_type character varying,
    description character varying,
    total_amount character varying,
    created_on character varying,
    updated_on character varying
);


ALTER TABLE public.transaction OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 57413)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--
DROP TABLE IF EXISTS users;

CREATE TABLE public.users (
    id character varying NOT NULL,
    email character varying,
    first_name character varying,
    last_name character varying,
    password character varying,
    profile_image character varying,
    balance integer DEFAULT 0,
    created_on timestamp without time zone,
    updated_on timestamp without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3368 (class 0 OID 57420)
-- Dependencies: 216
-- Data for Name: banner; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.banner VALUES ('0194df2b-2765-7c84-ad08-811e2748487a', 'Banner 1', 'banner1.png', 'Lorem Ipsum Dolor sit amet', '2025-02-07 13:49:57.368953', NULL);
INSERT INTO public.banner VALUES ('0194df2b-30c0-7907-b999-fe258a252de0', 'Banner 2', 'banner2.png', 'Lorem Ipsum Dolor sit amet', '2025-02-07 13:49:57.371056', NULL);
INSERT INTO public.banner VALUES ('0194df2b-3a52-775b-a1a3-ce54a3b22d3b', 'Banner 3', 'banner3.png', 'Lorem Ipsum Dolor sit amet', '2025-02-07 13:49:57.372843', NULL);
INSERT INTO public.banner VALUES ('0194df2b-42d8-7e36-9762-ae0375a70fff', 'Banner 4', 'banner4.png', 'Lorem Ipsum Dolor sit amet', '2025-02-07 13:49:57.374676', NULL);
INSERT INTO public.banner VALUES ('0194df2b-4a96-794f-8bb7-32ceec355530', 'Banner 5', 'banner5.png', 'Lorem Ipsum Dolor sit amet', '2025-02-07 13:49:57.37628', NULL);
INSERT INTO public.banner VALUES ('0194df2b-52b1-7af7-9fc6-c8645322f248', 'Banner 6', 'banner6.png', 'Lorem Ipsum Dolor sit amet', '2025-02-07 13:49:57.378104', NULL);


--
-- TOC entry 3369 (class 0 OID 57427)
-- Dependencies: 217
-- Data for Name: service; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.service VALUES ('0194df25-ab41-7907-9a17-b864826d746a', 'PAJAK', 'Pajak PBB', 'service1.png', '40000', '2025-02-07 13:47:51.493623', NULL);
INSERT INTO public.service VALUES ('0194df26-5464-748e-9096-f83efe08061a', 'PLN', 'Listrik', 'service2.png', '10000', '2025-02-07 13:47:51.496206', NULL);
INSERT INTO public.service VALUES ('0194df26-60e5-7b0c-a490-9575cc223155', 'PDAM', 'PDAM Berlangganan', 'service3.png', '40000', '2025-02-07 13:47:51.498705', NULL);
INSERT INTO public.service VALUES ('0194df26-6f6d-745a-b8b4-d6876f5c9fa8', 'PULSA', 'Pulsa', 'service4.png', '40000', '2025-02-07 13:47:51.501956', NULL);
INSERT INTO public.service VALUES ('0194df26-7ca0-79a6-a03a-ec44feb6d724', 'PGN', 'PGN Berlangganan', 'service5.png', '50000', '2025-02-07 13:47:51.503841', NULL);
INSERT INTO public.service VALUES ('0194df28-79aa-7627-91eb-51b58b1d774f', 'MUSIK', 'Musik Berlangganan', 'service6.png', '50000', '2025-02-07 13:47:51.505765', NULL);
INSERT INTO public.service VALUES ('0194df28-86f9-7f33-af2c-94892827c064', 'TV', 'TV Berlangganan', 'service7.png', '50000', '2025-02-07 13:47:51.508318', NULL);
INSERT INTO public.service VALUES ('0194df28-9139-777c-ba1d-c407b548e818', 'PAKET_DATA', 'Paket data', 'service8.png', '50000', '2025-02-07 13:47:51.510634', NULL);
INSERT INTO public.service VALUES ('0194df28-9ad9-7dbf-a966-92aa215a2995', 'VOUCHER_GAME', 'Voucher Game', 'service9.png', '100000', '2025-02-07 13:47:51.512935', NULL);
INSERT INTO public.service VALUES ('0194df28-a378-7285-9609-c65b2714d9e2', 'VOUCHER_MAKANAN', 'Voucher Makanan', 'service10.png', '100000', '2025-02-07 13:47:51.515609', NULL);
INSERT INTO public.service VALUES ('0194df28-ac2a-7c59-8e59-ac0b7fcfc31b', 'QURBAN', 'Qurban', 'service11.png', '200000', '2025-02-07 13:47:51.517603', NULL);
INSERT INTO public.service VALUES ('0194df28-b4bf-781a-9dec-d820fbb4ee7c', 'ZAKAT', 'Zakat', 'service12.png', '300000', '2025-02-07 13:47:51.519919', NULL);


--
-- TOC entry 3370 (class 0 OID 57434)
-- Dependencies: 218
-- Data for Name: transaction; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3367 (class 0 OID 57413)
-- Dependencies: 215
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3218 (class 2606 OID 57426)
-- Name: banner banner_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.banner
    ADD CONSTRAINT banner_pk PRIMARY KEY (id);


--
-- TOC entry 3220 (class 2606 OID 57433)
-- Name: service services_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service
    ADD CONSTRAINT services_pk PRIMARY KEY (id);


--
-- TOC entry 3222 (class 2606 OID 57440)
-- Name: transaction transaction_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_pk PRIMARY KEY (id);


--
-- TOC entry 3216 (class 2606 OID 57419)
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- TOC entry 3223 (class 2606 OID 57441)
-- Name: transaction transaction_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_users_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


-- Completed on 2025-02-08 04:23:47

--
-- PostgreSQL database dump complete
--

