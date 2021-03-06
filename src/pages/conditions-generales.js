import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout"

const TermsPage = () => (
  <Layout>
    <Helmet title="Conditions générales" />

    <div className="container pt-4">
      <h1>Conditions Générales d'Utilisation</h1>

      <h2>Prologue</h2>
      <p>Vous êtes nouveau membre de la communauté COOKOON, bienvenue ! </p>
      <p>
        Vous vous apprêtez à lire les conditions générales de services aux
        membres de la communauté COOKOON.
      </p>
      <p>
        Nous vous remercions de bien vouloir les lire avec attention. Elles
        détaillent les droits et obligations de COOKOON et des membres et
        précisent notamment les limitations et exclusions de responsabilité.
      </p>

      <h2>1. Introduction</h2>
      <p>
        Réceptions Nouvelles SAS propose une plateforme communautaire et fermée,
        dénommée COOKOON, permettant à ses membres de se rencontrer en ligne, de
        mettre à disposition des espaces et/ou de les réserver au travers d'une
        application et d'un site.
      </p>
      <p>
        COOKOON propose ainsi de mettre en relation des personnes disposant d'un
        espace propre à la réception avec des utilisateurs ayant besoin d'un
        espace pour une courte durée. L'utilisation de la plateforme est toutefois
        limitée, l'inscription n'est possible que dans trois cas :
      </p>
      <ul>
        <li>
          sur parrainage d'une personne physique ou morale déjà présente
        </li>
        <li>
          suite à la proposition et l'acceptation d'un  logement propre à la
          réception ( Bouton Sonner le portier sur l'application)
        </li>
        <li>
          suite à candidature soumise au vote d'un comité d'hôtes
          (Bouton Sonner le portier sur l'application)
        </li>
      </ul>
      <p>
        COOKOON propose également un certain nombre de services à ses
        utilisateurs afin de simplifier l'utilisation des espaces et de
        s'adapter aux besoins spécifiques de ses membres.
      </p>

      <h2>2. Définition des termes clés</h2>
      <p>
        « Annonce » désigne une annonce déposée par un Membre pour proposer un
        Espace à la location par le biais du Site et de l'Application.
      </p>
      <p>
        « Application » désigne l'application COOKOON pour appareils mobiles.
      </p>
      <p>
        « Contenu » désigne tout(e) texte, graphique, image, musique, logiciel
        (à l'exception de l'Application), audio, vidéo, information ou autres
        éléments.
      </p>
      <p>
        « Contenu de COOKOON » désigne tout Contenu que COOKOON propose par le
        biais du Site, de l'Application ou des Options COOKOON, y compris tout
        Contenu obtenu sous licence auprès d'un tiers, à l'exception du Contenu
        des Membres.
      </p>
      <p>
        « Contenu des Membres » désigne tout Contenu que les Membres postent,
        téléchargent, publient, soumettent, transmettent ou incluent dans leur
        Annonce ou profil de Membre afin de le rendre disponible sur le Site ou
        l'Application.
      </p>
      <p>
        « Contenu Collectif » désigne le Contenu des Membres et le Contenu de
        COOKOON.
      </p>
      <p>« COOKOON » désigne la société Réceptions Nouvelles SAS.</p>
      <p>
        « Cookooner » ou « Locataire » désigne le Membre lorsqu'il réserve un
        Espace et en a l'usage.
      </p>
      <p>
        « Espace » désigne l'espace mis à disposition des Membres par un Hôte au
        travers du Site et de l'Application.
      </p>
      <p>
        « Frais d'Espace » désigne les sommes dues et payables par un Cookooner
        pour l'usage de l'Espace.
      </p>
      <p>
        « Frais du Cookooner » désigne les frais que COOKOON facture à un
        Cookooner pour la mise en relation avec l'Hôte et les Options.
      </p>
      <p>
        « Frais de l'Hôte » désigne les frais que COOKOON facture à un Hôte pour
        la mise en relation avec le Cookooner et les Options.
      </p>
      <p>
        « Frais de Service » désigne collectivement les Frais du Cookooner et
        les Frais de l'Hôte.
      </p>
      <p>
        « Frais d'Options » désigne l'ensemble des frais liés aux Options
        sélectionnées par l'Hôte ou le Cookooner.
      </p>
      <p>
        « Hôte » désigne le Membre lorsqu'il publie une Annonce et met à
        disposition un Espace.
      </p>
      <p>
        « Moyen de paiement » désigne un moyen de paiement que le Membre a
        ajouté à son compte COOKOON, tel qu'une carte de crédit.
      </p>
      <p>
        « Options » désigne l'ensemble des options proposées par COOKOON sur
        l'application et sur le site.
      </p>
      <p>
        « Option Ménage » désigne l'option payante que COOKOON propose aux Hôtes
        via le Site et l'Application pour nettoyer et laver leur espace suite à
        l'usage par un Cookooner.
      </p>
      <p>
        « Option Concierge » désigne l'option payante que COOKOON propose aux
        Hôtes via le Site et l'Application et qui leur permet de confier à
        COOKOON l'accueil des Cookooners, le check-in / check-out et, après
        usage, la remise des clefs à une tierce personne de confiance
        géographiquement proche de l'espace.
      </p>
      <p>
        « Option Finish&Go » désigne l'option payante que COOKOON propose via le
        Site et l'Application pour permettre au Cookooner de quitter l'Espace
        après usage sans s'occuper de la remise en état.
      </p>
      <p>
        « Stripe » désigne le service de paiement tiers (<a
          href="https://stripe.com/fr"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://stripe.com/fr
        </a>) utilisé par COOKOON pour gérer les flux financiers entre les
        Membres ainsi que les flux financiers entre les Membres et COOKOON.
      </p>
      <p>
        « Site » désigne le site Internet{' '}
        <a href="https://cookoon.fr" target="_blank" rel="noreferrer noopener">
          https://cookoon.fr
        </a>{' '}
        et, plus généralement, tout site Internet par lequel Réception Nouvelles
        SAS donne accès à la plateforme COOKOON.
      </p>
      <p>
        « Taxe » désigne toute taxe sur les ventes, taxe sur la valeur ajoutée
        (TVA), taxe de séjour, taxe sur l'espace, frais (tels que les frais
        relatifs aux centres de convention), retenue à la source, impôt sur le
        revenu ou sur les bénéfices et, plus généralement, tout impôt ou taxe
        municipale ou nationale, directe ou indirecte que COOKOON pourrait avoir
        l'obligation légale de collecter auprès des Membres pour le compte des
        autorités fiscales.
      </p>

      <h2>
        3. Fonctionnement du Site, de l'Application et des Options COOKOON
      </h2>
      <h3>3.1 Création et bonne administration d'un compte</h3>
      <p>
        Pour créer un compte, toute personne physique ou morale doit
        préalablement avoir été invitée à le faire par un Membre.
      </p>
      <p>
        Le futur Membre doit ensuite créer un compte et renseigner un certain
        nombre de champs :
      </p>
      <ul>
        <li>Prénom</li>
        <li>Nom</li>
        <li>Date de naissance</li>
        <li>Téléphone</li>
        <li>Email</li>
        <li>Mot de passe. </li>
      </ul>
      <p>
        La validation de ces informations par le futur Membre lui permet de
        créer son profil COOKOON et d'accéder au statut de Membre.
      </p>
      <p>Avant la première location, le Membre doit :</p>
      <ul>
        <li>
          télécharger une photo de lui afin de pouvoir être identifiable par
          l'Hôte
        </li>
        <li>enregistrer une carte de paiement</li>
        <li>
          Si le membre est une personne physique il doit renseigner les
          informations suivantes :
        </li>
        <li>Numéro de carte</li>
        <li>Date d'expiration de la carte</li>
        <li>Code de sécurité</li>
        <li>
          Si le Membre agit pour le compte d'une personne morale, il doit
          renseigner les informations suivantes :
        </li>
        <li>Dénomination sociale de la société</li>
        <li>Siège social de la société</li>
        <li>Numéro de TVA Intracommunautaire.</li>
      </ul>
      <p>
        Toutes les informations renseignées doivent être exactes au moment de
        l'inscription, non frauduleuses et être mises à jour par le Membre en
        cas de modification. Il est par ailleurs strictement interdit d'avoir
        plus d'un compte actif. En cas de non-respect d'une de ces obligations,
        COOKOON se réserve le droit de suspendre temporairement ou de résilier
        le compte du Membre concerné.
      </p>
      <p>
        Le mot de passe garantit à COOKOON l'identité du Membre qui se connecte.
        En conséquence, le Membre est responsable de la protection de son mot de
        passe, il s'engage à ne pas le révéler. Qu'il les ait autorisées ou non,
        le Membre est responsable de toutes les actions légales, illégales ou
        frauduleuses effectuées sur ou via son profil suite à une identification
        effectuée régulièrement. En cas d'utilisation non autorisée de son
        compte, le Membre signalera immédiatement ces activités à COOKOON.
      </p>

      <h3>3.2 Création d'une Annonce</h3>
      <p>
        Tous les Membres peuvent publier des Annonces afin de mettre à
        disposition des Espaces.
      </p>
      <p>
        Pour créer une Annonce, le Membre doit fournir les informations
        suivantes :
      </p>
      <ul>
        <li>Nom de l'Espace</li>
        <li>Adresse</li>
        <li>
          Relation juridique du Membre avec l'Espace (Propriétaire, Locataire)
        </li>
        <li>Type d'Espace</li>
        <li>Surface de l'Espace en m2</li>
        <li>Nombre de personnes autorisées dans l'Espace</li>
        <li>Plages horaires de disponibilité de l'Espace</li>
        <li>Tarif horaire pratiqué </li>
        <li>Choix des Options (Basic / Extra)</li>
      </ul>
      <p>Il devra également ajouter des photos.</p>
      <p>
        Le tarif horaire est un élément essentiel du choix de l'Espace par le
        Cookooner.
      </p>
      <p>
        Dès lors qu'un Cookooner a effectué une demande auprès d'un Hôte pour un
        Espace, le prix fixé sur la demande est définitif et ne peut plus être
        modifié.
      </p>
      <p>
        L'Hôte qui publie une (ou deux) Annonce(s) est seul responsable des
        Annonces et de leurs Contenus. En conséquence l'Hôte garantit à COOKOON
        que toute Annonce, réservation d'Espace ou usage faisant l'objet d'une
        Annonce est conforme aux lois et règlements applicables nationaux ou
        locaux mais également à tout contrat passé par lui avec des tiers (baux,
        contrats de location, règlement internes de syndic etc.)
      </p>
      <p>
        La plateforme Cookoon intègre automatiquement une réduction de 15% à
        partir de 4 heures consécutives de location et de 20% à partir de 10
        heures consécutives de location. Par exemple : pour un appartement au
        prix de 20 € de l'heure, le locataire paiera 60 € pour 3 heures, 85 €
        pour 5h et 160 € pour 10 heures.
      </p>
      <p>
        Pour aider l'Hôte à optimiser ses Annonces, COOKOON peut mettre à sa
        disposition des outils de conseil notamment pour la fixation du juste
        tarif. L'Hôte reste néanmoins seul décisionnaire et seul responsable
        quant au contenu de ses Annonces.
      </p>

      <h3>3.3 Contrôle des Membres et Annonces</h3>
      <p>
        Les Membres sont seuls responsables du Contenu et des Annonces qu'ils
        proposent sur COOKOON. Ils sont tenus de fournir des informations
        exactes concernant leur identité et les Espaces qu'ils désirent mettre à
        disposition sur COOKOON.
      </p>
      <p>
        Néanmoins, COOKOON est une plateforme fermée et un nouveau Membre ne
        peut créer un profil et accéder au Site, à l'Application, aux Annonces
        et aux Options que sur invitation. Ce système de cooptation, s'il a pour
        objectif de faire émerger une communauté partageant une culture et un
        respect commun, ne représente pas une garantie sur les Membres, les
        Annonces ou l'usage fait des Espaces. COOKOON encourage donc ses Membres
        à la prudence lorsqu'ils mettent à disposition un Espace, se rendent
        dans un Espace et plus généralement dans leurs échanges avec les autres
        Membres.
      </p>

      <h3>3.4 Choix d'un Espace et envoi d'une demande</h3>
      <p>
        En se connectant sur le Site ou l'Application, le Cookooner peut étudier
        les différents Espaces proposés par les Hôtes.
      </p>
      <p>
        Il peut dès lors faire son choix et envoyer une demande ou plusieurs
        demandes de réservation à des Hôtes.
      </p>

      <h3>3.5 Choix des Options</h3>
      <p>
        En plus de la mise à disposition de sa plateforme technologique COOKOON,
        COOKOON propose à ses Membres différentes Options leur permettant une
        expérience simplifiée ou optimisée.
      </p>
      <p>
        Lorsque le temps entre la réservation sur le Site ou l'Application et
        l'utilisation de l'espace est trop court, ces Options peuvent être
        désactivées, COOKOON n'ayant pas le temps d'en assurer la bonne
        réalisation.
      </p>

      <h4>3.5.1 Par l'Hôte</h4>
      <p>
        Pour libérer l'Hôte de toute contrainte liée à la mise à disposition de
        son Espace, COOKOON propose deux Options :
      </p>
      <ul>
        <li>
          l'Option Concierge qui permet de confier à COOKOON la remise et la
          récupération des clefs à l'Hôte et aux Cookooners dans un périmètre
          proche de l'Espace, l'accueil des Cookooners, le check-in, le
          check-out ;
        </li>
        <li>
          l'Option Ménage qui permet de confier à COOKOON la gestion du
          nettoyage de l'Espace après l'occupation par le Cookooner (juste après
          le départ du Cookooner ou le lendemain matin en cas d'usage tardif de
          l'Espace).
        </li>
      </ul>

      <h4>3.5.2 Par le Cookooner</h4>
      <p>
        Pour fournir au Cookooner une expérience libre d'un maximum de
        contrainte, COOKOON propose l'Option Finish&Go qui offre la possibilité
        au Cookooner de déroger à la règle d'usage fondatrice de COOKOON à
        savoir que le Cookooner doit rendre l'Espace dans l'état dans lequel il
        l'a trouvé en arrivant.
      </p>
      <p>
        L'Option Finish&Go permet ainsi au Cookooner de quitter l'Espace sans se
        préoccuper du rangement ou du nettoyage.
      </p>
      <p>
        Il est précisé ici que l'Option Finish&Go ne comprend pas la remise en
        état de l'Espace suite à des dégradations volontaires ou involontaires.
      </p>

      <h3>3.6 Approbation</h3>
      <p>
        Lorsqu'un Cookooner effectue une demande de réservation auprès d'un
        Hôte, ce dernier reçoit un email lui indiquant :
      </p>
      <ul>
        <li>nom</li>
        <li>prénom</li>
        <li>email du Cookooner</li>
        <li>lien vers son profil.</li>
      </ul>
      <p>L'Hôte peut alors accepter ou refuser la demande. </p>
      <p>
        Pour chaque demande de réservation, l'Hôte recevra un email lui
        indiquant la date et l'heure limite pour répondre à cette demande, étant
        précisé que l'Hôte devra, en toutes hypothèses, répondre à la demande de
        réservation dans les 24 heures suivant la demande de réservation.
      </p>
      <p>
        Si l'Hôte n'est pas en mesure d'accepter ou refuser la demande dans ce
        délai, la réservation est annulée.
      </p>
      <p>
        Si le Cookooner effectue plusieurs demandes de réservations à la même
        date et pour les mêmes horaires, la première location acceptée annulera
        automatiquement les autres demandes de location.
      </p>

      <h3>3.7 Evaluation et notation</h3>
      <p>
        Une fois l'Espace quitté par le Cookooner et le check-out effectué,
        l'Hôte et le Cookooner reçoivent une demande pour savoir s'ils sont
        satisfaits de leur expérience COOKOON. Si leur réponse est négative, un
        formulaire leur est envoyé pour connaître les problèmes rencontrés.
      </p>

      <h2>4. Conditions financières</h2>
      <p>
        Les flux financiers entre les Membres et au profit de COOKOON
        s'effectuent obligatoirement par le biais sécurisé de Stripe. A cet
        effet, la création d'un profil COOKOON emporte automatiquement et de
        plein droit création d'un profil et d'une fiche client Stripe.
      </p>
      <h3>4.1 Pour les Hôtes</h3>
      <p>
        Pour la mise en relation de l'Hôte et du Cookooner et la réservation de
        l'Espace qui en résulte, COOKOON perçoit de l'Hôte une rémunération
        égale à sept pourcent (7 %) de la rémunération à verser par le Cookooner
        pour la location de l'Espace (tarif horaire × nombre d'heures x éventuel
        coefficient pour location supérieures à 4h).
      </p>
      <p>
        Pour chaque réservation, l'Hôte reçoit par conséquent une rémunération
        égale au nombre d'heures d'utilisation de l'Espace multiplié par le
        tarif horaire (les Frais d'Espace) diminué de la rémunération de COOKOON
        et des éventuelles Options qu'il aura sélectionnées (ensemble les Frais
        de l'Hôte).
      </p>

      <h3>4.2 Pour les Cookooners</h3>
      <p>
        Pour la mise en relation de l'Hôte et du Cookooner et la réservation de
        l'Espace qui en résulte, COOKOON perçoit du Cookooner une rémunération
        égale à sept pourcent (7 %) de la rémunération à verser par le Cookooner
        pour la location de l'Espace (tarif horaire × nombre d'heures x éventuel
        coefficient pour location supérieures à 4h).
      </p>
      <p>
        Le Cookooner doit par conséquent verser une rémunération égale au nombre
        d'heures d'utilisation de l'Espace multiplié par le tarif horaire (les
        Frais d'Espace) augmenté de la rémunération de COOKOON et des Options
        qu'il aura sélectionnées (ensemble les Frais du Cookooner).
      </p>
      <p>
        Le Cookooner accepte que les Frais d'Espace et les Frais du Cookooner
        soient prélevés directement sur son compte bancaire via la carte
        bancaire qu'il aura enregistrée dès sa demande de réservation.
      </p>
      <p>
        Dès que la demande de réservation sera confirmée ou infirmée par l'Hôte,
        le Cookooner recevra un email.
      </p>
      <p>
        En cas de confirmation, le mail contiendra un récapitulatif de la
        réservation et le Cookooner sera prélevé du montant indiqué lors de sa
        réservation augmenté des Frais du Cookooner.
      </p>

      <h3>4.3 Récapitulatif</h3>
      <p>
        En conséquence des éléments décrits supra, les frais perçus par COOKOON
        lors de la réservation de l'Espace d'un Hôte par un Cookooner sont ou
        peuvent être les suivants :
      </p>
      <p>Mise à disposition d'Espace :</p>
      <ul>
        <li>
          Frais de l'Hôte : 7 % du montant demandé par l'Hôte en application du
          tarif horaire
        </li>
        <li>
          Frais du Cookooner : 7 % du montant demandé par l'Hôte en application
          du tarif horaire
        </li>
      </ul>
      <p>Options pour l'Hôte :</p>
      <ul>
        <li>Option Concierge : 20 € TTC par réservation </li>
        <li>Option Ménage : 20 € TTC par réservation </li>
      </ul>
      <p>Options pour le Cookooner :</p>
      <ul>
        <li>
          Option « Finish & Go » : 3,5 € TTC par convive avec un minimum de 22 €
          TTC
        </li>
        <li>
          Frais de chef à domicile, traiteur, catering et autres services : sur
          devis
        </li>
      </ul>

      <h3>4.4 Généralités</h3>
      <h4 id="4.4.1">4.4.1 Annulation et remboursements des Espaces</h4>
      <p>
        Chaque Membre doit faire un usage responsable de COOKOON en effectuant
        ou acceptant des réservations réfléchies sans avoir recours à
        l'annulation de façon trop fréquente. Pour ce faire, les Membres
        s'engagent à ne pas effectuer ou accepter des réservations « de sécurité
        » qu'ils pensent annuler ultérieurement.
      </p>
      <p>
        Néanmoins si un Membre ayant effectué ou accepté une réservation
        rencontre un problème l'empêchant d'assurer ladite réservation, il peut
        annuler cette dernière dans les conditions ci-dessous énoncées.
      </p>
      <p>
        En tant que Cookooner, si vous souhaitez annuler une réservation, vous
        êtes soumis au régime d'annulation suivant : concernant le lieu,
        l'annulation est possible jusqu'à 48h avant la date et l'heure de
        réservation prévue sans frais / entre 48h et 24h, seule 50% de la somme
        versée est remboursée / moins de 2h, le montant total de la réservation
        est dû.
      </p>
      <p>
        En cas d'annulation d'une réservation par l'Hôte, le Cookooner sera
        intégralement remboursé.
      </p>
      <p>
        Si l'hôte annule une réservation dans les 72H précédent le début de la
        location, une pénalité de 60 € pourra être appliquée par COOKOON.
      </p>
      <p>
        Suite à un nombre trop important d'annulations faisant suite à des
        acceptations, COOKOON se réserve le droit de suspendre temporairement ou
        de résilier le compte de l'Hôte concerné.
      </p>

      <h4>4.4.2 Modification de réservations des Espaces</h4>
      <p>
        Les modifications de réservations ne sont pas possibles. Si le Membre
        désire modifier sa réservation, il doit l'annuler puis la réeffectuer.
      </p>

      <h4>4.4.3. Annulation des réservations des Options</h4>
      <p>
        L'Option Ménage et l'Option Concierge peuvent être modifiées et annulées
        sous réserve de respecter un délai de prévenance de 6 heures avant
        l'heure prévue pour la réalisation de l'Option. Les Membres doivent,
        pour ce faire, envoyer un mail à{' '}
        <a
          href="mailto:Concierge Cookoon<concierge@cookoon.fr>"
          target="_blank"
          rel="noreferrer noopener"
        >
          concierge@cookoon.fr
        </a>{' '}
        en indiquant le numéro de leur réservation d'Espace.
      </p>
      <p>
        Pour les autres Options, les conditions de modification et d'annulation
        des partenaires sollicités par COOKOON pour réaliser lesdites Options
        s'appliqueront.
      </p>

      <h2>5. Utilisation des Espaces </h2>
      <h3>5.1 Code de conduite du Cookooner</h3>
      <p>
        La règle centrale qui régit le comportement des Membres et l'usage des
        Espaces est le respect des biens confiés et des personnes. Ainsi l'Hôte
        doit mettre à disposition un Espace dans un état de propreté qui
        permette son usage par le Cookooner. Le Cookooner doit quant à lui
        laisser l'Espace qu'il a utilisé dans un état identique à celui dans
        lequel il était lors du check-in ou de l'état des lieux.
      </p>
      <h3>5.2 Check in / Check Out</h3>
      <p>
        Afin d'encadrer l'usage des Espaces, COOKOON met à disposition des
        Membres un système de check- in / check-out permettant à l'Hôte (ou à la
        personne qu'il a mandatée) et au Cookooner d'effectuer un état des lieux
        de l'espace servant de base à l'état des lieux de sortie ou check out.
      </p>
      <p>
        Il est précisé ici que COOKOON met à disposition des Membres un simple
        outil et ne peut être tenu responsable de l'usage qui en est fait ou des
        éventuelles discussions et controverses qui pourraient en résulter entre
        les Hôtes et les Cookooners.
      </p>
      <h3>5.3 Prolongement de séjour dans l'Espace</h3>
      <p>
        Lorsqu'un Cookooner a fait la réservation d'un Espace à une date et un
        horaire et pour une durée fixe, une fois que celle-ci est validée, il ne
        peut en aucun cas prolonger son séjour. La validation de l'état des
        lieux de sortie vaut validation de l'horaire de fin du séjour. Si cette
        validation intervient après l'heure fixée lors de la réservation,
        COOKOON se réserve la possibilité de facturer une pénalité correspondant
        à trois fois le prix du temps dépassé, calculé sur la base du tarif
        horaire de la réservation.
      </p>
      <h3>5.4 Dommages</h3>
      <p>
        En cas de réclamation d'un Hôte suite à l'usage d'un Espace par un
        Cookooner et sur présentation de preuves notamment photographiques, le
        Cookooner devra remplacer les articles endommagés par des articles
        équivalents. Si la réclamation de l'Hôte concerne des dégradations de
        l'Espace en lui-même, le Cookooner devra assumer les conséquences
        financières de ces dégradations.
      </p>
      <p>
        Si le Cookooner ne donne pas suite aux messages le sensibilisant sur les
        dégradations effectuées lors de sa location, l'Hôte pourra alors se
        retourner directement contre le Cookooner et il sera fait application
        des dispositions de l'article 5.4 ci-dessus.
      </p>
      <h3>5.5 Signalement d'une mauvaise conduite</h3>
      <p>
        Si un Hôte ou un Cookooner constate un comportement inapproprié dans
        l'Espace, il doit le signaler au commissariat puis avertir COOKOON en
        indiquant l'adresse du commissariat ainsi que le numéro du rapport de
        police.
      </p>

      <h2>6. Déclarations et taxes</h2>
      <p>
        Les réglementations nationales ou locales peuvent encadrer la location
        d'Espaces entre particuliers.
      </p>
      <p>
        Préalablement à toute mise en ligne d'un Espace sur le Site ou
        l'Application, l'Hôte concerné a l'obligation de se renseigner pour
        connaître les obligations notamment fiscales liées à la location
        d'Espace pour de courtes durées.
      </p>
      <p>
        Les Hôtes doivent par ailleurs se conformer aux règlementations
        applicables notamment fiscales et s'engagent à :
      </p>
      <ul>
        <li>
          effectuer toute déclaration préalable qui pourrait être nécessaire
          pour inscrire un Espace sur le Site ou l'Application ;
        </li>
        <li>
          effectuer toute déclaration nécessaire et notamment fiscale concernant
          les revenus tirés de la mise à disposition de leur Espace sur le Site
          ou l'Application ;
        </li>
        <li>
          effectuer tous les règlements de taxes ou impôts liés à cette même
          mise à disposition auprès des autorités compétentes
        </li>
        <li>le tout sans recours possible contre COOKOON.</li>
      </ul>
      <p>
        Si les réglementations nationales ou locales et notamment fiscales
        venaient à évoluer entraînant pour COOKOON l'obligation de collecter
        certaines Taxes concomitamment à la réservation d'un Espace, les Membres
        acceptent que COOKOON collecte directement lesdites Taxes.
      </p>
      <p>
        Sur simple demande de leur part, COOKOON pourra adresser aux Membres une
        facture TTC correspondant au montant des commissions et Options
        facturées.
      </p>

      <h2>7. Conditions liées à l'Application et à son Contenu</h2>
      <h3>7.1 Licence pour l'Application</h3>
      <p>
        COOKOON concède à chaque Membre une licence limitée, non transmissible
        et non exclusive afin qu'il puisse télécharger une copie de
        l'Application sur chaque appareil mobile ou ordinateur qu'il possède, en
        vue d'un usage exclusivement et strictement personnel.
      </p>
      <p>
        L'utilisation de l'Application devra par ailleurs être conforme aux
        dispositions contenues dans les « Conditions d'utilisation » ou autre
        document de même nature du Store sur lequel l'application aura été
        téléchargée.
      </p>
      <h3>7.2 Contenu Collectif</h3>
      <p>
        COOKOON concède à chaque Membre une licence limitée, non transmissible
        et non exclusive afin qu'il puisse accéder et consulter au Contenu
        Collectif disponible sur le Site et l'Application.
      </p>
      <p>
        Les Membres s'interdisent de copier, modifier, adapter, reproduire un
        outil, une œuvre dérivée ou inspirée du Site, de l'Application, des
        Options ou du Contenu Collectif.
      </p>
      <h3>7.3 Contenu des Membres</h3>
      <p>
        Chaque Membre peut à sa seule discrétion poster du contenu, textes,
        photos, vidéos ou autre sur sa page ou son profil COOKOON.
      </p>
      <p>
        Chaque Membre déclare, reconnaît et garantit qu'il est seul propriétaire
        et responsable du Contenu qu'il publie sur le Site et l'Application et
        que ce Contenu est libre de tous droits.
      </p>
      <p>
        En acceptant les présentes conditions, chaque Membre accorde à COOKOON
        une licence irrévocable, non exclusive, transmissible, dotée d'un droit
        de sous-licence et gratuite pour le monde entier et pour une durée
        indéterminée (ou pour la durée maximum légalement applicable) sur
        l'ensemble du Contenu ainsi posté sur COOKOON.
      </p>
      <p>
        Les Membres autorisent donc la diffusion sur tout support ou par tout
        moyen technique, l'adaptation, la modification de ce Contenu, la
        concession sous licence, le transfert et l'utilisation publique.
      </p>
      <p>
        COOKOON ne revendique aucun droit de propriété concernant le Contenu des
        Cookooners et les présentes conditions n'ont pas pour objet d'encadrer
        ou limiter le droit d'utilisation de ce Contenu.
      </p>
      <p>
        De manière générale, et sans que cette liste puisse être considérée
        comme exhaustive, le Membre s'interdit de diffuser sur le Site ou
        l'Application :
      </p>
      <ul>
        <li>
          des propos, des signes ou images diffamatoires ou injurieux, ou
          portant atteinte à la vie privée de tiers,
        </li>
        <li>
          des propos, des signes ou images dénigrants d'autres personnes
          physiques ou morales ou les produits et/ou marques d'un tiers,
        </li>
        <li>
          des photos d'une quelconque personne sans avoir préalablement
          recueilli son accord écrit,
        </li>
        <li>
          des textes, photographies ou dessins pouvant porter atteinte d'une
          quelconque manière aux internautes mineurs,
        </li>
        <li>
          des textes, photographies ou dessins pouvant être constitutifs
          d'incitation à la réalisation de crimes et de délits, de provocation à
          la discrimination, à la haine ou à la violence en raison de la race,
          de l'ethnie ou de la religion, de contestations de l'existence de
          crimes contre l'humanité ou de génocides reconnus, de fausses
          nouvelles, d'atteinte à l'autorité de l'Etat, d'incitation au suicide,
        </li>
        <li>
          des messages quelle qu'en soit leur forme à caractère violent ou
          pornographique ou de nature à porter gravement atteinte à la dignité
          humaine,
        </li>
        <li>
          des messages quelle qu'en soit leur forme à caractère politique ou
          sexuel.
        </li>
      </ul>
      <p>
        Le Membre s'engage à se conformer à l'ensemble des lois et
        réglementations en vigueur sur le territoire français.
      </p>
      <h3>7.4 Liens</h3>
      <p>
        Le Site et l'Application peuvent contenir des liens vers du Contenu
        provenant de tiers sites Internet tiers gérés par des sociétés
        distinctes de COOKOON et sur lesquels COOKOON n'exerce aucun contrôle.
        COOKOON n'assume aucune responsabilité quant au contenu de ces sites
        tiers ou au contenu des sites vers lesquels ils peuvent renvoyer.
      </p>
      <h3>7.5 Propriété intellectuelle</h3>
      <p>
        COOKOON se réserve le droit d'ôter un Contenu qui violerait les droits
        d'auteur d'un tiers. De même si COOKOON constate des violations répétées
        des droits d'autrui par un Membre, elle se réserve la possibilité de
        clôturer le compte du Membre concerné.
      </p>

      <h2>8. Responsabilité</h2>
      <h3>8.1 Responsabilité </h3>
      <p>
        COOKOON est un prestataire de services et met en relation les Membres en
        vue de la location de courte durée d'Espaces. COOKOON n'est ni
        propriétaire ni exploitant des Espaces et n'a pas qualité de courtier en
        immobilier, d'agent immobilier ou d'assureur.
      </p>
      <p>
        Ses obligations se limitent par conséquent à ce qui suit : (i) faciliter
        l'accès au Site et à l'Application et (ii) proposer des Options
        facilitant la mise à disposition ou l'usage des Espaces.
      </p>
      <p>Il en résulte que :</p>
      <ul>
        <li>
          COOKOON n'assure pas le contrôle des lieux, la légalité ou le
          caractère adapté des Espaces.
        </li>
        <li>
          COOKOON n'assure pas le contrôle de la conformité des Espaces aux
          Annonces.
        </li>
        <li>COOKOON n'assure pas le contrôle du Contenu des Membres. </li>
        <li>
          COOKOON n'assure pas le contrôle de la destination et de l'usage que
          les Cookooners font de l'Espace.
        </li>
      </ul>
      <p>
        En conséquence, les Membres effectuent et acceptent les réservations
        d'Espaces à leurs propres risques, sans recours possible contre COOKOON.
      </p>
      <p>
        La réservation s'effectue directement entre Membres, COOKOON n'étant pas
        partie au contrat qui se forme entre les Membres. En conséquence, la
        responsabilité de COOKOON ne pourra pas être engagée en cas de
        non-respect par l'Hôte ou le Cookooner des dispositions légales,
        réglementaires ou contractuelles découlant de la mise à disposition
        d'Espaces.
      </p>
      <p>
        Chaque Membre est par ailleurs seul responsable de ses interactions avec
        les autres Membres. COOKOON ne contrôle pas les échanges entre Membres
        et donc la véracité ou l'exactitude des informations échangées.
      </p>
      <p>
        L'Hôte et le Cookooner sont responsables, chacun en ce qui les concerne,
        de leurs actions et omissions dans l'Espace ainsi que des actions et
        omissions des personnes présentes à leur demande ou avec leur
        autorisation dans l'Espace, en ce compris les personnes liées aux
        Options réservées par l'Hôte ou le Cookooner,
      </p>
      <p>
        Enfin, COOKOON rappelle aux Membres les caractéristiques et les limites
        du réseau Internet et décline toute responsabilité liée aux conséquences
        de la connexion des Membres à ce réseau via le Site ou l'Application.
        Plus particulièrement, COOKOON ne saurait être tenue responsable des
        dommages, matériels ou immatériels causés aux Membres, à leurs
        équipements informatiques et aux données qui y sont stockées, et aux
        conséquences pouvant en découler sur leur activité personnelle ou
        professionnelle. COOKOON ne saurait davantage être tenue responsable si
        un ou plusieurs Membres ne peuvent pas se connecter au Site ou à
        l'Application à la suite d'un défaut technique ou de problèmes liés
        notamment à l'encombrement du réseau.
      </p>
      <h3>8.2 Assurance</h3>
      <p>
        Afin de protéger et de rassurer les Hôtes, COOKOON et AXA France ont mis
        en place une solution d'assurance dédiée qui couvre les biens
        immobiliers et mobiliers de l'Hôte durant les occupations.
      </p>
      <p>
        Cette solution d'assurance est automatiquement incluse dans toutes les
        réservations réalisées via l'Application et le Site.
      </p>
      <p>
        Le contrat d'assurance souscrit par COOKOON pour le compte des
        Cookooners couvre les conséquences pécuniaires de la responsabilité
        civile du Cookooner vis-à-vis de l'Hôte, pour l'utilisation de l'Espace
        (responsabilité civile et dommages aux biens).
      </p>
      <p>
        Les conditions générales et particulières du contrat souscrit avec AXA
        France (notamment la liste détaillée des garanties, la durée du contrat,
        les franchises et les plafonds appliqués) peuvent être consultées ici :{' '}
      </p>

      <ul>
        <li>
          <a
            href="https://drive.google.com/open?id=1YSDLo0SK3z9Yf0lLvoSO7KCp6Jv7OGnO"
            target="_blank"
          >
            Conditions générales
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/open?id=1HxostqQkQs0FxH9a4-aXeey9oHTiD4Sa"
            target="_blank"
          >
            Conditions particulières
          </a>
        </li>
      </ul>
      <h3>8.3 Renonciation à recours</h3>
      <p>
        Chaque Membre renonce à tout recours contre COOKOON, ses dirigeants,
        représentants ou employés pour toute réclamation, dommage, perte ou
        dépenses liés à l'utilisation par le Membre de l'Application, du Site ou
        des Options, c'est à dire, entre autres, la création d'une Annonce, la
        réservation, la location, l'utilisation, l'état d'un Espace.
      </p>

      <h2>9. Champ d'application du présent accord</h2>
      <h3>9.1 Conditions de service et généralités</h3>
      <p>
        Lorsque vous utilisez le Site ou l'Application, vous acceptez de
        respecter et d'être juridiquement lié par les dispositions des présentes
        Conditions Générales de Services.
      </p>
      <p>
        Les présentes Conditions déterminent votre accès au Site, à
        l'Application, au Contenu Collectif et leur utilisation, ainsi que votre
        participation au Programme de Parrainage.
      </p>
      <p>
        Vos informations personnelles seront traitées conformément à la loi
        Informatique et Libertés du 6 janvier 1978. Chaque membre dispose d'un
        droit d'accès, de rectification ou de radiation des informations le
        concernant qui pourra être exercé en adressant un e-mail à{' '}
        <a
          href="mailto:Cookoon<contact@cookoon.fr>"
          target="_blank"
          rel="noreferrer noopener"
        >
          contact@cookoon.fr
        </a>.
      </p>
      <p>
        COOKOON pourra utiliser le système des cookies permettant la mesure
        d'audience en vue d'améliorer le service du Site et de l'Application. Le
        Membre a la possibilité d'accepter ou de refuser les cookies en
        configurant son navigateur. COOKOON attire toutefois l'attention sur le
        fait que si les Membres refusent les cookies, certaines fonctionnalités
        proposées pourraient ne pas être effectives.
      </p>
      {/* <p>
        Veuillez également lire attentivement notre Charte de Protection des
        Données à Caractère Personnel, consultable sur le site{' '}
        <a
          href="https://cookoon.fr/privacy"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://cookoon.fr/privacy
        </a>.
      </p> */}
      <h3>9.2 Modification et notification</h3>
      <p>
        COOKOON se réserve le droit, à sa seule discrétion, de modifier le Site,
        l'Application, les Options, les Frais de Service, les Frais d'Option et
        les présentes Conditions à tout moment et sans notification préalable.
      </p>
      <p>Les modifications seront notifiées aux Membres par tout moyen. </p>
      <h3>9.3 Admissibilité</h3>
      <p>
        Le Site, l'Application et les Options s'adressent uniquement aux
        personnes majeures, l'accès aux mineurs est strictement interdit. En
        accédant ou en utilisant le Site, l'Application ou les Options, vous
        certifiez avoir 18 ans ou plu
      </p>
      <p>
        Par ailleurs il est strictement interdit pour un Membre d'envoyer une
        invitation à s'inscrire sur le Site ou l'Application à l'attention d'une
        personne mineure. En cas d'envoi d'une invitation par un Membre à une
        personne mineure, COOKOON se réserve le droit de suspendre momentanément
        ou définitivement l'accès du Membre concerné au Site et à l'Application.
      </p>
      <h3>9.4 Résiliation et suspension</h3>
      <p>
        Les Membres peuvent à tout moment demander la fermeture de leur compte
        en envoyant un email à :{' '}
        <a
          href="mailto:Cookoon<contact@cookoon.fr>"
          target="_blank"
          rel="noreferrer noopener"
        >
          contact@cookoon.fr
        </a>.
      </p>
      <p>
        Si vous supprimez votre compte COOKOON en tant qu'Hôte, toute
        réservation confirmée sera alors annulée et les Cookooners concernés
        seront intégralement remboursés.
      </p>
      <p>
        Si vous supprimez votre compte COOKOON en tant que Cookooner, toute
        réservation confirmée sera annulée. Si la fermeture intervient moins de
        48 heures avant la date de réservation, vous ne serez pas remboursé des
        sommes versées.
      </p>
      <p>
        COOKOON peut immédiatement et sans préavis suspendre ou supprimer tout
        ou partie du profil ou du Contenu d'un Membre qui aurait manqué à ses
        obligations au terme des présentes conditions générales de service,
        violé les droits d'un tiers, fourni des informations erronées ou
        obsolètes, fait preuve d'un comportement inadapté dans ses relations
        avec les autres Membres, reçu de façon répétée de mauvaises évaluations
        de la part d'autres membres ou si COOKOON estime, de bonne foi, qu'une
        telle mesure est nécessaire pour préserver la sécurité ou la propriété
        d'autres Membres.
      </p>
      <p>
        COOKOON pourra unilatéralement et à tout moment interrompre
        temporairement ou définitivement la mise en ligne de son Site et/ou de
        l'Application sans que sa responsabilité puisse être recherchée et sans
        que cela puisse donner lieu à l'allocation de dommages et intérêts de
        quelque nature que ce soit.
      </p>
      <h3>9.5 Loi applicable et juridiction compétente</h3>
      <p>
        Les présentes conditions sont régies et interprétées conformément à la
        loi française.
      </p>
      <p>
        En cas de litige, si le Membre est une personne physique, les parties
        conviennent de s'en remettre à la compétence du Tribunal de Grande
        Instance de Paris.
      </p>
      <p>
        Si le Membre est une personne morale, les parties conviennent de s'en
        remettre à la compétence du Tribunal de Commerce de Paris.
      </p>
    </div>
  </Layout>
);

export default TermsPage;
