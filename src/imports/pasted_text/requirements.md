\section{List of Requirements}

\label{app:requirements}

\subsection{Must}

\noindent\textbf{User Account \& Profile Management}
\begin{enumerate}
    \item As a user, I must be able to register and log in using an email or username and a password so that I can access the platform features.
    \item As a user, I must be able to customize my profile—including my username, password, email, occupation type, age range, profile picture, country, and city of residence—so that I can represent myself accurately to other participants.
    \item As a user, I must be able to log out of my profile so that my account remains secure when not in use.
    \item As a user, I must be able to delete my profile so that I retain full control over my personal data and presence on the app.
\end{enumerate}

\noindent\textbf{Trip Discovery \& Management}
\begin{enumerate}
    \setcounter{enumi}{4}
    \item As a user, I must be able to see a list of all available trips in my selected region so that I can discover activities to join.
    \item As a user, I must be able to join and leave an active trip at any time so that I can manage my participation flexibly.
    \item As a user, I must be able to create and modify a trip by specifying the destination, date, meeting point (via a Google Maps link), itinerary, and minimum/maximum number of participants so that I can easily organize group travel.
    \item As a user, I must be able to access my incoming trips directly from the main page so that I can quickly reference my upcoming plans.
    \item As a user, I must only see upcoming or active trips, as the system must automatically hide trips whose start dates have passed.
\end{enumerate}

\noindent\textbf{Safety \& Moderation}
\begin{enumerate}
    \setcounter{enumi}{9}
    \item As a user, I must be able to report users and trips that appear malicious so that the platform remains a safe environment for everyone.
\end{enumerate}

\subsection{Should}

\noindent\textbf{Communication \& Sharing}
\begin{enumerate}
    \setcounter{enumi}{10}
    \item As a user, I should be able to communicate with other participants via an in-app group chat after joining a trip together so that we can coordinate logistics.
    \item As a user, I should be able to share a direct link of a trip to other potential participants so that I can invite people outside the immediate app ecosystem.
    \item As a user, I should be notified when the creator of a trip I am participating in has edited its details so that I am always aware of changes.
\end{enumerate}

\noindent\textbf{Profile \& Trip Customization}
\begin{enumerate}
    \setcounter{enumi}{13}
    \item As a user, I should be able to enrich my profile details with long descriptions, social links, and hobby lists so that others can get to know me better.
    \item As a user, I should be able to edit my profile to show or hide my past trips so that I can control my privacy.
    \item As an organizer, I should be able to add tags to the trips I create by choosing from a predefined list so that my trips are easier to categorize.
    \item As an organizer, I should be able to set the visibility of my created trips to public (visible to all users) or private (accessible only via link) so that I can control who joins.
    \item As a user, I should be able to filter trips by budget range, method of transportation, date range, and tags so that I can find trips that precisely match my preferences.
\end{enumerate}

\subsection{Could}

\noindent\textbf{Enhanced Navigation \& Organization}
\begin{enumerate}
    \setcounter{enumi}{18}
    \item As a user, I could use an interactive map displaying all trips created for my current country so that I can visually browse geographical options.
    \item As a user, I could specify my city so that the app automatically filters available trips based on my exact location.
    \item As a user, I could select my favorite trips (heart them) to save them for later without explicitly joining them.
    \item As a user, I could sort trips alphabetically, by cost, and by duration so that I can prioritize my viewing order.
    \item As a user, I could view a map of all the trips I have participated in directly from my profile so that I can visualize my travel history.
\end{enumerate}

\subsection{Won't}

\noindent\textbf{Out of Scope Features}
\begin{enumerate}
    \setcounter{enumi}{23}
    \item As a user, I won't be able to manage trip expenses or split money within the app, as the platform focuses on trip discovery rather than financial management.
    \item As a user, I won't have my private information (such as contact info, exact age, gender, and full names) publicly available to ensure strict privacy.
    \item As a user, I won't be able to rate other users after a trip.
    \item As a user, I won't be able to send pictures or use prepared messages in the group chats.
    \item As a user, I won't be able to see other users' previous trips.
    \item As a user, I won't receive automated app recommendations for future trips.
    \item As a user, I won't be able to create recurring events, as the app strictly focuses on single trips.
    \item As a user, I won't be able to share or save photo albums after trips.
    \item As a user, I won't be able to share my live location through the app during a trip.
    \item As a user, I won't be able to add other users as 'friends' or organize formal pre-trip meetings through the app.
\end{enumerate}

\subsection{Non-Functional Requirements}

\noindent\textbf{System Constraints \& Usability}
\begin{enumerate}
    \setcounter{enumi}{33}
    \item The system must be available as a mobile application for both iOS and Android platforms.
    \item The system must ensure all in-app chat messages are end-to-end encrypted to protect user privacy.
    \item The system must be capable of supporting up to 10,000 concurrent users within a single region.
    \item The system must cap individual trip capacities at a maximum of 30 participants.
    \item The system must be fully GDPR compliant to protect the data of EU users.
    \item The system must securely hash and per-user salt all passwords in the database.
    \item The system should provide multilingual support, specifically for English, German, and French.
    \item The system must utilize a high-contrast, colorblind-friendly design to ensure accessibility.
    \item The system should organize its interface using a bottom-tabbed navigation in a nested doll structure.
\end{enumerate}