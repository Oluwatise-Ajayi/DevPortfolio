# Oluwatise Ajayi's Developer Portfolio ✨

A modern, interactive personal portfolio website showcasing a Systems Engineer's skills, projects, and experience through a dynamic Bento Box layout. This application integrates real-time data from Spotify and GitHub to provide a captivating and engaging user experience, designed to highlight technical proficiency and a keen eye for modern UI/UX.

## Features 🚀

*   **Dynamic Bento Box Layout**: Visually engaging and responsive grid presentation of all portfolio sections.
*   **Real-time Spotify Integration**: Displays the song currently playing on Spotify, complete with album art, title, artist, and an audio preview player.
*   **GitHub Contribution Visualization**: Showcases recent GitHub activity with a stylized contribution graph, reflecting consistent development engagement.
*   **Personalized Tech Stack Showcase**: Highlights proficiency in a diverse range of technologies, from backend frameworks to cloud platforms, with dynamic icons.
*   **Comprehensive Experience Timeline**: Presents professional and academic journey in a clear, chronological format, detailing roles and companies.
*   **Interactive Code Snippet Display**: Illustrates technical skills with an example code snippet, demonstrating problem-solving approaches.
*   **Modern Contact & Social Links**: Provides easy access to professional social media profiles and direct contact information.
*   **Optimized for Performance**: Built with Next.js for server-side rendering and static site generation capabilities, ensuring fast load times and a smooth user experience.

## Getting Started

### Installation

To get this project up and running locally, follow these steps:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Oluwatise-Ajayi/DevPortfolio.git
    cd DevPortfolio
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    # or yarn install
    ```

### Environment Variables

This project requires environment variables for Spotify API integration. Create a `.env.local` file in the root directory and add the following:

*   `SPOTIFY_CLIENT_ID`: Your Spotify application's Client ID.
*   `SPOTIFY_CLIENT_SECRET`: Your Spotify application's Client Secret.
*   `SPOTIFY_REFRESH_TOKEN`: Your Spotify Refresh Token for long-term access.

**Note**: To obtain these credentials, you need to register an application on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/). For `SPOTIFY_REFRESH_TOKEN`, you'll need to go through Spotify's Authorization Code Flow to get an initial refresh token.

## Usage

1.  **Start the Development Server**:
    ```bash
    npm run dev
    # or yarn dev
    ```
2.  Open your browser and navigate to `http://localhost:3000` to view the portfolio.

### API Endpoint: Spotify Now Playing

This portfolio includes a Next.js API route to fetch the user's currently playing song from Spotify. This allows for the dynamic "Now Playing" feature without exposing sensitive API keys directly to the client.

#### GET /api/now-playing

Retrieves the currently playing song from Spotify.

**Response (Success - Song Playing)**:

```json
{
  "album": "The Album Title",
  "albumImageUrl": "https://i.scdn.co/image/ab67616d00001e02f2323e4b7c8f8b8a8b8b8b8b",
  "artist": "Artist Name",
  "isPlaying": true,
  "songUrl": "https://open.spotify.com/track/trackidexample",
  "title": "Song Title",
  "previewUrl": "https://p.scdn.co/mp3-preview/audio_preview_url"
}
```

**Response (Success - Not Playing / Offline)**:

```json
{
  "isPlaying": false
}
```

**Errors**:

*   `500 Internal Server Error`: Returned if there's an issue communicating with the Spotify API, invalid tokens, or other server-side processing errors.

## Technologies Used 🛠️

This project leverages a robust set of modern web technologies to deliver a high-performance and engaging user experience:

| Category     | Technology     | Version    | Link                                            |
| :----------- | :------------- | :--------- | :---------------------------------------------- |
| **Framework** | Next.js        | `16.0.10`  | [nextjs.org](https://nextjs.org/)               |
| **Library**  | React          | `19.2.1`   | [react.dev](https://react.dev/)                 |
| **Language** | TypeScript     | `^5`       | [typescriptlang.org](https://www.typescriptlang.org/) |
| **Styling**  | Tailwind CSS   | `^4`       | [tailwindcss.com](https://tailwindcss.com/)     |
| **Icons**    | Lucide React   | `^0.561.0` | [lucide.dev](https://lucide.dev/icons/)         |
| **Backend**  | Node.js        | (runtime)  | [nodejs.org](https://nodejs.org/)               |
| **API**      | Spotify API    |            | [developer.spotify.com](https://developer.spotify.com/) |

## Author

**Oluwatise Ajayi**

*   [LinkedIn](https://www.linkedin.com/in/oluwatise-ajayi-26697b1ba/)
*   [Twitter/X](https://x.com/OluwatiseAjayi_)
*   [Email](mailto:oluwatiseajayi393@gmail.com)

---

## Badges

[![Next.js](https://img.shields.io/badge/Next.js-Black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
