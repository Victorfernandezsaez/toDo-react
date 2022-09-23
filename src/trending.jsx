import "./trending.css"
import Row from "./row";

export default function Trending() {
    const cards = [{
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZYKJjQk2Y4HiwlKs3tCiP6FKgZJ2PFTmLP94urIR-gufq215AK2unqkOMUdzoiaA3Px1mowFUHJmQSVnC86BDz9DdvBbrcJRuo.jpg?r=c87",
        movieName: "Fight Club",
        link: "https://www.netflix.com/watch/26004747?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-708224_titles%2F1%2F%2Ffight%2F0%2F0%2CNAPA%40%40%7Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-708224_titles%2F1%2F%2Ffight%2F0%2F0%2Cunknown%2C%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-708224%7C1%2C%2C"
    },
    {
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb7swWWb4euPHU4TzWWlsPsgDNzqv75W7NeUlDulCWiFpzI8hKdHBj1cIyeSDVCyJQDr_N-lQL_Y_sIy2Ea7wJBD8d3TMiAWwQjX5Cxmj_YfuDQL2DEVhLaQupAnc2gRP4doCgUxpM175YKnI-sRaMmueK7E-pX05xMSBWMEoSiPABUJ4Wt6MUyr_LbwzyrzdHpfzR4xKLmht284de8Mgs7-MkCrGXB_a8TkHZHN6VMC39h3hpxJiYpDLSPi9YuGl6TMVsM1hExn2n80mn31qyg5_6K-QEsig2OaHMJ58-5gcArPgqWKSo-lG8N9RkOD2TeMJ5i3o6lAMtC-wx0.jpg?r=7e6",
        movieName: "Fate the Winx Saga",
        link: "https://www.netflix.com/watch/80220679?trackId=14187351&tctx=1%2C0%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-1215304%2CGPS_138D35ED32D61AD20F531A43216717-5ADE17ED30BD03-85EC379CFD_p_1663861856333%2CGPS_138D35ED32D61AD20F531A43216717_p_1663861856333%2C%2C%2C%2C80220679"
    },
    {
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf-E1xwgEUUf9C8Tdry9i9Bs6S-TaffY7OTI9ldAH-2664zByHEuLquvzg_74CIYVKFh7JQgQLvYSqHlzoEtcoTasSuTSwhdh11kYHHr6o6htS1O8giA7kfI3z9hwQh15aZR-BtYR8U4SfOQ1FrHa67617NGPgXDhQG2-lmRWpAmQymjab7L0AuW9lpBPxU.jpg?r=7d4",
        movieName: "Cyberpunk",
        link: "https://www.netflix.com/watch/81056738?trackId=14188529&tctx=1%2C1%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-1215304%2CGPS_138D35ED32D61AD20F531A43216717-5ADE17ED30BD03-85EC379CFD_p_1663861856333%2CGPS_138D35ED32D61AD20F531A43216717_p_1663861856333%2C%2C%2C%2C"
    },
    {
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWa-9i3VO-GH57wYS4IO7Rmcb0Yz7Yj1Tz4_qa9vLZiuwcVIhkgl9rYHCdqYbb_Jbi0rJPZM446eyOQhuxje5zVRDaq-1lupl0mOWxA1pM-zgHbyIJ6BmaMO0r36YOYFN1uf2I08ZdfodsRgif7kpJsH6L2J0yE-jN3u2_5d1khlMdS0EdD3awWdeWHbnxg.jpg?r=c03",
        movieName: "The Crown",
        link: "https://www.netflix.com/watch/80025678?trackId=14187351&tctx=1%2C2%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-1215304%2CGPS_138D35ED32D61AD20F531A43216717-5ADE17ED30BD03-85EC379CFD_p_1663861856333%2CGPS_138D35ED32D61AD20F531A43216717_p_1663861856333%2C%2C%2C%2C80025678"
    },
    {
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQGtG2GdEk7xurSblbZnX3Gh3iy6SOlMRBUlypIzhbq5YUa-3j4GtFoLe7vBKlu0VGgKPUcgJ2KDbV_zUVUMt3FdYv2nBrTuk73G9MObNfwVrOotpCWpFdDpPwVpaD5tVsuc9rQED2o98un_GUChu2qAdBM70eVtiL32oys1qrAtmMGLw8L92wwfWxhc6dA.jpg?r=4a0",
        movieName: "Heart Break High",
        link: "https://www.netflix.com/watch/81347569?trackId=14188529&tctx=1%2C3%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-1215304%2CGPS_138D35ED32D61AD20F531A43216717-5ADE17ED30BD03-85EC379CFD_p_1663861856333%2CGPS_138D35ED32D61AD20F531A43216717_p_1663861856333%2C%2C%2C%2C"
    },
    {
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUQOjeQy2eZ_MnQRzcrt_WyKEB8G8MU6H1AfxPHPyiiX-c_Hzs8RhHjoRSjVfSKCAofkT6s3RlGQ7XwVhnfTu1l-saLH5zzVItoOk3fM48XpKQt6lBd14vJm8qQvvW8Ro5R9.jpg?r=a07",
        movieName: "Peaky Blinders",
        link: "https://www.netflix.com/watch/80003008?trackId=14187351&tctx=1%2C4%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-1215304%2CGPS_138D35ED32D61AD20F531A43216717-5ADE17ED30BD03-85EC379CFD_p_1663861856333%2CGPS_138D35ED32D61AD20F531A43216717_p_1663861856333%2C%2C%2C%2C"
    },
    {
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfe9N5ZxTtQnInAIUhNtK0cAfY-K1mTuSwm7sKE-QTfgV22HbaL0zE-3hB_4aUl4qj7oGdHx0_3t3YI___x0pmSnR_NDQPVMaVAIsbV62H6Bl91Ze3ogjjOq79_X0Bm1mT1y.jpg?r=337",
        movieName: "Business Proposal",
        link: "https://www.netflix.com/watch/81509440?trackId=14187351&tctx=1%2C5%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-1215304%2CGPS_138D35ED32D61AD20F531A43216717-5ADE17ED30BD03-85EC379CFD_p_1663861856333%2CGPS_138D35ED32D61AD20F531A43216717_p_1663861856333%2C%2C%2C%2C81509440"
    },
    {
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcPZvMTG0Q-xU--X67luwWCRSLWic5H5IjZuSXG2LZlXjNtdSfYugnV1m5QpNlru4vM6OMOFhL5OunmFCXjTBAcz_L0nPtIU6V1Q3FMMW752R_QZSLHxYux8LcVUQZZhaT6q.jpg?r=85b",
        movieName: "El Rey Vicente Fernández",
        link: "https://www.netflix.com/watch/81152939?trackId=14188529&tctx=1%2C6%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-1215304%2CGPS_138D35ED32D61AD20F531A43216717-5ADE17ED30BD03-85EC379CFD_p_1663861856333%2CGPS_138D35ED32D61AD20F531A43216717_p_1663861856333%2C%2C%2C%2C81152939"
    },
    {
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbWdQZCoWeZQdNQMgenTHme30v3IzWvCta3YIca_3z5K5zYFHTwla4Y7j7n-TIjHh6UabB7TJ0HSrNfdxE3-MlwEHEFF65Uhmj4.jpg?r=720",
        movieName: "Demon Slayer",
        link: "https://www.netflix.com/watch/81091395?trackId=14187351&tctx=1%2C7%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-1215304%2CGPS_138D35ED32D61AD20F531A43216717-5ADE17ED30BD03-85EC379CFD_p_1663861856333%2CGPS_138D35ED32D61AD20F531A43216717_p_1663861856333%2C%2C%2C%2C"
    },
    {
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdONuf-b3F49H-UcQCPA4S5-2oLxzffbuOsodvCMzylyOpkwy24hPxoEqm2hL_mj86qkfwnQAtPlgjZAVkg1odFWYQXZVLp7eiY.jpg?r=e36",
        movieName: "Naruto",
        link: "https://www.netflix.com/watch/70176435?trackId=14187351&tctx=1%2C8%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-1215304%2CGPS_138D35ED32D61AD20F531A43216717-5ADE17ED30BD03-85EC379CFD_p_1663861856333%2CGPS_138D35ED32D61AD20F531A43216717_p_1663861856333%2C%2C%2C%2C"
    },
    {
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe8lbEis2sT5bU8zpRJlWa_aBe2Dnnq0cyf91Fd_lKOYxKIeDBRgzYCVIOw-7UwDqhEDw9tawJmj0i1wNB1OwGSS5CQhDrvMkpK0xfnJ9yUyiTwB2Sq2UbX3VXPUQqhyufckVHS2xR4JfHClrzmlPsKjWEBcH6wi6ATTJq_HaxW-lMcKunmv8npeBAsBs-VSBEsgelC4l04ix17aAOWmOwsJ4eT0LO9G79F5MdpROAL4e5nG1n9gUBemPLC2OvxUTb92DxNrQAyBdMgC7f_J7ibjPLU.jpg?r=507",
        movieName: "Jojo Bizarre Adventure",
        link: "https://www.netflix.com/watch/70176435?trackId=14187351&tctx=1%2C8%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-1215304%2CGPS_138D35ED32D61AD20F531A43216717-5ADE17ED30BD03-85EC379CFD_p_1663861856333%2CGPS_138D35ED32D61AD20F531A43216717_p_1663861856333%2C%2C%2C%2C"
    },
    {
        picture: "https://occ-0-1906-1555.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaZETSJCNxQNPyTchmL0tN9YLU5VDMxuVE8B7rMJ0BHCS4E5tgJStkzSdrukbQviobSu2j2gBOYY2AK38cY7OPRTqGEBrg_Ui-u0EOcD-M9UnXIcyoMSWVcoKyB7HEcDgrg6.jpg?r=9b8",
        movieName: "Queer Eye Brazil",
        link: "https://www.netflix.com/watch/81236054?trackId=14188529&tctx=1%2C13%2Ca7f95e25-89ab-4d49-8ef3-103e3f6f4f6e-1215304%2CGPS_138D35ED32D61AD20F531A43216717-5ADE17ED30BD03-85EC379CFD_p_1663861856333%2CGPS_138D35ED32D61AD20F531A43216717_p_1663861856333%2C%2C%2C%2C"
    },
]
 
    return (
    <div className="margin_top">
      <Row name="Trending" cards={cards} />
      <Row name="Keep Watching" cards={cards} />
      <Row name="Recommended" cards={cards} />
      <Row name="Because you watch POP TEAM EPIC" cards={cards} />
    </div>
  );
}