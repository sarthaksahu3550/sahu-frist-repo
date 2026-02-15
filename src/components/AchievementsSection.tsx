import { motion } from "framer-motion";
import cert1 from "@/assets/cert-1.jpg";
import cert2 from "@/assets/cert-2.jpg";
import cert3 from "@/assets/cert-3.jpg";
import cert4 from "@/assets/cert-4.jpg";

const googleCerts = [
  "https://lh3.googleusercontent.com/sitesv/APaQ0SQuslUpK6LAO9jF91q0DhFPVz4WUPKBwdid8gOP9t8X_Fd1SXexcA8EHl0wgNn3LfXlT3HW0m07wZiZdCxBw1IYIbZnjpXj_5WcEmEVkFbHHYE9nk5wuGO26mT4bim5KY0EOiyOUwdSdXQJqlPhMAg0kfLRCAPe_ervg_bbu9IY3ASBMR-SQGPkz0x64lX6XH03JSr5ql64cQ6qdjqYWNUs9vO6mZ4plws9HUY=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SQDcg3ITM3dNQQ1a47egr6avnTV0p09ci9ThThomKh1JxmH64rYe_We8RR4TKtK4-ZFO0RBJbN53S4wtULJCWOP4gBBxtXetHZxAqm3MBYjYSdwU2M-VTl0SbKo6JnR1JIRILgXLC98SEwKwmkA9aHWwYUtJ0nPkOsm307_kI4WJj2MwiNOOKWFOO0w8nx660smf7pK0DfJg3Mte9dRmugkGc9lF8sl_HBtpDQ=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSPGXTg3LkZdv7322CKoK8BADx4JOOCVYEYgB675JflAytA8uNSq5I9Z4WFGOLaWK5DIlggTRnC59-7Cw6Q4mgDpbBI-L7vD7s1EvHqgWYrmZM2cSNFyS77h9v9KaMwTxGYfIMx2XQdRJWylMduR_Rqy-OWgEvg07m9ScnmJD6rS488YaTRu1yqnO2UNRRlWMR8du3NM8bqDwbHLUP9VMTClfSYbe6V4aoPZV8=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SRpiIYczH2D_2eRsOkstkjKJzgUomz5fyC9k_bE5nBu4xlAKcYheE7SbvZ8x9qJP3Hc-p9cxUb3u85XPSl1y1ohsCqkkJqmbfx78ZjAuoX-4TfVyva2CPiQqYK6nVjKLw-0GyxTMGDtJqAf0pW3TaW_4g2mcZe6f1B10bo2KVOCnzFTYwxayJXrvOqtLsYXICLrSvlNQ0TVNan-8r4jLTHBeit0hPrztSzbwkU=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSQ6KhcG5VVlqYxYZd9w8WlPXCYqSKxQDT-CXulJbMvmB-zve50gn6ik33lycAFagO9-d6BB3W5yk8cKodOcYjDYLUp86ldLoZmzu-2eJqfWkvACCm5A1TEr1ylZjpWkVV7nlf0aDrIkBRlECdr7ADl_NlSN41kdYOIK3jsfi8DDHxRj_hsLGfOpo0_zH9V-xo4irSzpDCe0ZKqiM6lMAhWz1DSE8Od-xNbkBE=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSzdt8DpdSNzDfCAkkd4haHygyyVmtqTO0RTi7zfahOM7RBQ2TQulsQmPq7fFx05VrFT4mEp-tms5c94ArcA81DDElyZ-eg8g2fuUdVtuHmmCzXKouAlm8fFbMDssQY_SeN2Hxkq0d9IMd_uokcwJwaVz0qS3WhKuSl-Ni19iKr85V3pD8drFlKmaEX6RmqKM3P1FLj07SHbKjuOVuRcPCPQSJ14PgsamcLT_8=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SQJVXwzlwJQAt7Jxdi-uCWi1JFiOXLehHZS5c8RKsdzcS7O5JXTZhL0xP1XyUalx5LAw_xbdbQUfMKWE8B3qnZYhqJb0LE7LVjCU-M6kz79z7c2rPacx8Aq6dlLh-HJM44rvjzZe8aPRVVk570HWFfEVrYmYeL2sr1_vfNst8oIuTm0imBuoMdj6aSLjKY1EUFlu_F0nzj3vb0jN50z5HxNVGeDkqVW3Dw3se4=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0STCjdyOP9MmFn-3lM9RKQ7ILP51kehZ_LsXqFD8soIKVvYdo-20qa7e5XN3LpZnUClv58cSpED5kqxtIDBtRF5kmoTERklNokYBNLi3ukhGU7SvL15W7J8V9xWXueYjmNPoSOacuTh2axqW_EPBJydXjyyugaMtQ2hhtAa0jDYJb5zDIoKji9All9nh7GI36iGRWmok6EDq5PPhVxb4Ovnmhp_R0IRjGNvI6VM=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SRHxAV8ow8RABHZYpJnsyhLTIRPOp18Xs8WYwXtNmWDB4rHwNKyMyn68s4toHgZ752etfBHzbqnSnskiaeVoBS6QI7JsqaVVpDu-Tp5m5RReDXvcQxVWs2ClzLSAyUk02CSSfzAHA4mK6DrB7BkOgUuuqGxwZpnjugVTV480WCfzaQd3Sdf2T5ZphXBHJj4D46MEYp2HjBuPUQbOdUbi0vwG2ITRqNUWHVZ=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SQRUisZRrjEW6H-TcpTVi1OdOEXvkkXNcgtMRJBs_YhtK7tvxW3IjkWM9M6OkfQnCD_WzOgrwO-0B5Uv4r57b_qL9acS8cwCSxaeA99ooI2B9--6dcjfqruXPTI8c3vNuMwrQHYwLatD9ood0nO4e3t7ZDHjNhxp3gM7qrt0BnMSdmtbnzrzi05eL_YcRhfWnSNhqf_pMPuMUJtTpnf4cPMrm2dw88ctupqK0E=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSX0yGoADPQBtPvsl6-1TxBBh5eeM3g7k8jLmmS36Xbxzn2ntG1a7gDCHSQYCSwZEXY20-1VFFZCVoLGu5sFUGRbgm5vUhFozcRb2w0vW4Ie0Xh2j9QUh9IGVKYf2QRUwzdAaSIDwSsaRXVmk2G7bEUwhBWLqKWLArM5bmJ-1U3SCfEzmZfVGjefRE5x5JZ8llq-84BC7wslleV0cl3Xhjh26-bh5EKPjsaLsE=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SQWKUZ39eiGl3vQES2xpNNjhrAME3JI5-duCp4Ey1BxmDL79A8WPfmk0KvrH2knvt_VBXA_MmCtxZI1PjLdNus0Qrst1Ow67pyJTdd0BX6S78CLNT4liRqw2bhUMgGmMWg86cOFYbdH_VAaCLAm5c1cN9VjZv0THBHVvIomYiuuSS_9C9JRCvM3SS55f1DSd3fw5DpMaE_O3BaNZ1xsaMl1Ov3kzKum4wPjHjs=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SRWLj2W4KpkRRDWlu95fye4-R8gdaERxBlrI3K9K3AvH3ktzXz5Xk3Hf54L0I-bMAXHa9Te1BaCfRhqIHOeMh-mVdWD3h_hK7P7kF2N9Ib41IIyE270c4IjjlzEsD2EJogMMtRBeW1TsnqTzShr0PR4k7SKC_WCo43__w1Teu08sprzg4IX5o3yccyfumz92H5ZFOR-NIMBINHefz3yDBtZ_m4aqK6ulYcq=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0STurr7J9632xf-mEcSSuPf1W8amLRSd2-5TxXrp0suo4lZyX45YcezeItaP882rxHM5jqsKhOjcMNFzYmizgq2TKK78PiXy-HS6Tjji0osmlY0IE9xur3BreFwRDgDmymtZh2TdgVi39DqbQ4WqIUUchEwiqOmUhnSPrC3qJG6B4jlupKeQtJxs_5u18KS7wYsE1bkKMGihpjRtFh-o3jhz00TqgRIUMKHpg84=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SS1BT_W2Ej_Mk9ufe4hzl2Kwi7ZJNbVE-pKXDCsnQFShXukYZgIda-SqePG4pKfDw-CgVTHzJ4jzJ7XH-6FbtiQKMQyJaCzaVvHqX-pIFxRDC_pTpqsJE3UPPI998eIGtAPBZx3LdLXzNymC6hzzc4LXTUWxcx9rsIdZdMmKswAy_XqBaP4PxuB6HsPtQkA7RmgoA6WqajSaEGX0f00qvNnCDVvno409shX=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSWiBKqPWAj9ACEwMMH_wg1J6PcQx9NApigkYWqBGLvfooo4pz-8w7NB9vRZO2NfVz9928snKr5CNLG1w0PALn1S70R4ZuUasTc_otOI7_ffg-EC1NyQ3TmXyseaBHlxMNj84ncKLO4V-czgccS774YEpxAec0TCHI-gE15i0zhpFsxVBtTlPcMU0RhE3SeoNEWVKevKNynfQmeRq4QmQvqGlbn-CkC6kCb-D0=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0STTXRN4npDlqc8bEwLT6UZ7t7PrPuRu0t2BUd0ASvEBpeu_RSnAUMCiPWrj0qYRXD7MRqSvhd-8pDrDF9qes4m35T2nwj1bJx9qJgBkFss_xMVrPh750JHtCl6FIOvl-TuZGnEi03avWaGSzeECm1zgh4OU5ndYjBh8e3mmZCNSI_9NUzqcRBnCIDa3O0gCmthnRW5RJbncR9kFVhpJR20d_Q85kcGlOcHk=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSW0cnV968FhmVwFD6C4lqIttfwi9z_KGg9-Ih7c2lx674YyGN_AYl3CvZcEhZde6_g32Zhh3-rSMNa9xByCOgoFHzpe220OavX5vmxZiBBEazqKXm-yfiherBrIZrJT250TGWARUqIUzPKqTbARam8vXbu27ke_ybU_duJq8-idOU6nBVFtqcrxuW4ZXHGi2A9Xv-tJGyJyOFzKVXnUss1j7R0LxrPkMfvRQk=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SRXc19Ef9bqS3FzAu0xfNnJTWCb2I_wW2Iv3sCohiHFnDwXKY3mSBl_8WC0J0RBqR7WKgcUt7jYid2VpEt7bdptQsyszI580eHr-hOQK8yCHSXqUCnnt2mt8w_OTpDKk_oeYk4r9v2E2JNi6i7nmH1-vIs3MeEyElQ4p7G1lO_YORezjSY3mxiqYSYxgPNEU2STbI821-Ydf5JYlaDOrt_txkpk3eXc8lcRGh8=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSilEADb9cnpJ_9yxmEnS4ROwYWWrhbm9DqOq7XtSW45_pcqAIKeheW36rytIgr83SMloc71K-f8nfg4hwtObWD0dnyPCROtoc2sZ-fEuFq6rXnzeY9taU1O0P1TOosbPQR2UIjbntbHp7NSVAn7XxC8RM_5icMCg9_94JrW_n2UmvA64emFGt1hXfcWYeG_JBTUqPEH_DnFbXiYbawqSEEMAvnn7OqrZLLN8A=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SR1hTdJZ1z6d73PxIG2ygpc4PSaN2320Rckxe5OXk3-rxxMy2YR9qlm2nWWtBJA0zftG5QWL5w7jjuXrt2YNwYL8loThHDDnEJndlh8WxkzYmwd3_BUdXj3gcyGDLMOWUfMXrYTc766vrCyTFmeTtol2laEjyxZI25yuy7oVJewvwpGUUjDcFPHNz0Am-XzVy5J22P467PPed9tOW7xK6AogblhmHVmEtQC=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0STyVjbKxYP46iT2AVeUbSZsCfEL4b0FR3Pb7UOtV-CoJWYKeT_4f1REyrKJgUe-3AmOFKZ1VyIvN-q9PbxL01i9191bWoL59iw6hXV2Z5ST6PkhHo9fE-c1E3W2CMrWzv4CnxpWZEJ2jR54NHwSCwkTQRt_KOYJnlEcQjIlcCNybY3_mZv8bpBXUZgAjcPbTFHqd8ooiFFgzD3UVqS0lx5PJShAz3ABz9fm0mY=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SRkWXaysUlxqUKSLHUhOx32bHFLQUnegxt7S7NG1A6k8gFILo0Ti2DShJvS82m5yeVT5iWjnfOPpM2t7HdIKKsfWrCnQovpSAZvMrzPMQzETIOWKBnrYAcK-uqUZzgPaFq1EyGAp7Le-c7WWpppEmdQKJV8h__JV4hUEcz23fr4eIunAHfT8xC16HJHv9PbAYr6qVBWmJMA2AWsC5HzIAypcKMz_yIZWDzG=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SR9ud-oxckfBQf-YcP5d6mw2UY0P9MhT95OLONeIslIrIJKH7fsXFivGDckbQhVRWbao2OLZedlLCS2ym7SyCrv-aQ-P9tIecpMJq8Oy8Uk3mrjZ_BnP4bb9SNcez25CyUvO2OMdaUX2a15xuuOBu0R6F3EyP1uAADujillUXgRM2vHXR6EC1Ns3qpsClaUcu3lsWsrA56xl7j4W0sL_viVwgdQ3gdo1b8f=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SThpajgyayEJhJNdSNuHIGxzhHCC48MVtQLAFlZOVlg98z4fIeftozkTtH86q0sybd97fbSWa-PvgD1piphlr002Y7uubfIIG6vdM_9CsNB_X7ph39Gm899Tsb7pnFZqUoapbLGHDU31B7UeKcsryWyO_pUODNU7AllNOmW_OEddfXnLme3SVDlNXsDdwPawpT5mGrKlbtf5ft4aO9c5C0EKUV1c_js72j4fb4=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0STJVqdcFMfIehd9XeEhAQLWa4HGAjzozo6VFUNZEhIBU1oQo4CZmlDmrLEAgjHDKdGHQ7JvPYMaqc74x82WSqlZQsIplFQ8Sw5u_6tGzMKFJ5FpJH4c5LDy7H-Wvp7f6ZLTdQ5Py-7WwRUFQrmV9kX_usZyqrX143midK80YeHF421Y_bwteBK1hy5bSwwr-IfIazzVq_TLV_1UkVnuvy0nz6z52RBZj_dPe5Y=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SQD0xUCABVPAbGvXKOY4cH7XqZboy0nxcd3PUbI-aSzc11ytFUkhYIujTsMJlz-H21kHQVHCRoMbfbqAql0hjD4mK_4CtNaQb3rP3EZ1Oodrbj6OfWO1pvp-XZ5BNgv6ANohyH3EG3L_DvNIcvqsIBFWZn1Z82WL8hOyycfLpFb7kNpCMbc7xN91iKTIetz1UbWcBDJvxr1btbQgAz5g9E5uQbCbB9sSUJ7XPw=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SQqbRJv6vkG7BIsDWLKpkQAFPjqK_k3sTvw5156R89Nh5rzmkyJ23LLNzXD-VAcRkhkp-t-iEZ_8ibMaqmIC5ZlABOFoLML-ZOar1pxkc7f74nQksYhM_jyypzDkvDA7ZSN-3JyZIUrA6M6-K6wutIaFoiU64b4hJbV_R_RrSHLnKTXW5KMkdBgudQ9tdQHBRcN-Q6CDlzKfq2XXy2TWtkKtNr_hYzUBzsiq0I=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0ST9Wa0cTaMxUFGtNsdWyBfWi1aXZDJLTMbWcL8XMcV-aFbc4YcwBR3nIIc88xr2edhs3kg7T5J7AcwHO9k6SHrwna9zHtrPgFUbRdF885TcH76AcFT8zatpOc5Q9jjp6ArNd8X8VRXj1BsQmhntn-r9sctwMU4sNg-ar1pynTYwFPIdAYMhMjsJ=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0STq_AnIamsr4-1OJMBJWOO4WhGcBVCJJmIZEDPH7nbYgFgRXdCHl5Reqq3dVg95O04xq-aMj0Lj7iHbVz5h10QAuACdcz9YszwIIiksE7JJz-h-lYjlcpHvyQHpsTBApKVL4bdG4Ea9RvdPvijWs_ebl-8wOWw44YRwzolTQKLwBgYBMWMoXk2yUBvhxr3Z0uS3DM-dQrIfoxYaMq14KhUXZ0_EX-mUEUXQEGU=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0STX3ZK9p6WqEwI0R7kfbABoqtYqImDMQTSVe9KK_2Zsz0cbcwgqH7BouzqJ8PkBYuhGxHmHW2TDaErYfNl67J5KsQWt2XtTCYUEYFZ7tytKB14c3IvCpsLGD5XVA75x6eIZTsVc5eXCE9204J4k6CjaE9XD2KwKXfkxCltsXMB11UvL1MrlnlRWk7rF9dsnxRdwF9AXP5sIcNp1zZgKX50adxYn7jDhP77tRp0=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSoNkGWvpIV0OQ0ChnEFG6ZhjocLI7st7idKjY6MDNFk-K8pW4-GNnMkAFU3ukoTHIiFILzmCtkN8hbyMLmLOJfbjw-SHHoKA99hzFpkq2bKgyztqhfNvzseVLfStzfs0WOqG_wpIEhwx_KCd_cArEQ4IZv1Fre_R7xmscPkrEhqw1VnhSrf7y-JY7DIIXBPvBGMINPx4xtRinBW8biOfkNmTCEqM-ot5Aw=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0STSjjqXL5t-I0y4MKYqFMpH0SHBbeSNEjBW5r6NoG_IONVJJpm9NkQMLmZds0ibeX_DdLIF2BykiMkLUO5NM5S9gtXX4FdS74Y50mDUr7D1o-OlJ1GKd41YxibzOMenevNgkwezjZEoAs1gi1YL1jnMIH68KA-RuEhgYLNNhQGHkkMdw-UvqI8FGZdIFvY9S_VAh7rJqT2etYcJhZcMatYTLIe0-Y6P_TAJ=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0STGLKn2ARwwCSQEV_gqjIISCRLbRY82hOjRJBxX2u5Y0Bm9jrGthDDgNlZ7D0MFvRQBNO5zR7ruWRP2e5UwYtofmdcutUM0hj0CWsVkcclM6iAMH5Z18CGcVu1J1LVetmxesnCw3JUHbsmZA9D4vLFAg6eik2JKd1IZToS7Nf2YDujbUtBtGTH_uT-2BXL7BL7SQVDRpP0TaMQ4X2MdA-pre_1gL9dXBwwO=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SS5yFnL13NSaNVUFNtObA7zOg4AbGiC1YR9X91KO4KObUawM97a-V87zUN0eI4VI0G9HXWTeEWdZm3euSg4bYlnZEQiNSKlUHhLceRbg77PJRDFI7fyJ2FucBPOb7CaV7PFBdP4_wfIam9dGRygf1-cYhk9bGM35hepbKdBG3KGz0wTCU0hX3WhDr62DbNDnQEFRlNUOqt7fouAzdAiKorZKw_0HLmIw-0lj-U=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SRfaX2Z_Qw85lVcwW1qbMggJC99Mlf_fTZk7UlV7do1EZH76fj0Z5mdnwNgmUDPOkxm-2FBIqOlcSN1R4T7Z4k5wWyqCNaMv4DPw0_jogTbXD98f4B_uCSdmAoVjsG3wv6Sy1DvQDe5_5GN6ziGc1WTGUQ8Da04CnEkG_KoM_ecYE_AgHeizyquYalbXet4_N9k2fEGNKYVovI44qAUZVkKEygXfIszYB1f=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0STpb5zpEipONXSW2VeUHPRgmqglDcKEg6raO6UZn-KjrpBFEkSgelhCRZ8mAYASBurU_hZgnVgDz45qk1eTI9d-3fU6tia4d919fxM9ZTu159kgbSkWZhUu_5jX9UDrntcpKOaJIBKDwb9YqwbfWzKntkMuhNAfTzMIdEwHvUFJjJfqA4OnOJnGtHVj_MYA5mp-GR1QeuzOF_JRO3mx41vuUPz1ZtbKnu9E_qI=w1280",
];

const localCerts = [
  { src: cert1, alt: "Certificate 1" },
  { src: cert2, alt: "Certificate 2" },
  { src: cert3, alt: "Certificate 3" },
  { src: cert4, alt: "Certificate 4" },
];

const AchievementsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
        >
          My <span className="text-primary">Achievements</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-lg"
        >
          Certificates and recognitions I've earned through hard work and participation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Local downloaded certificates */}
          {localCerts.map((cert, i) => (
            <motion.div
              key={`local-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="cert-card rounded-lg overflow-hidden border border-border bg-card"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}

          {/* Remote Google certificates */}
          {googleCerts.map((url, i) => (
            <motion.div
              key={`remote-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="cert-card rounded-lg overflow-hidden border border-border bg-card"
            >
              <img
                src={url}
                alt={`Certificate ${i + 5}`}
                className="w-full h-auto object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
