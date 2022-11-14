import config from "../config.json"; // use ./ para a mesma pasta e ../ para uma pasta acima
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red" //
    };

    console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists}>
                    Conteúdo
                </ TimeLine>
            </div>
        </>

    );
}

export default HomePage

//function Menu() {
//    return (
//        <div>
//            Menu
//        </div>
//    );
//}


const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

`;

function Header() {
    return (
        <StyledHeader>
            {/*<mg src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>*/}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h1>
                        {config.name}
                    </h1>
                    <p>
                        {config.job}
                    </p>
                </div>

            </section>

        </StyledHeader>
    );
};

function TimeLine(props) {
    console.log("Dentro do componente", props.playlists);
    const playlistsName = Object.keys(props.playlists);
    // Statement
    // Retorno por expressão

    return (
        <StyledTimeline>
            {playlistsName.map((playlistsName) => {
                const videos = props.playlists[playlistsName];
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistsName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )

                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    );
}