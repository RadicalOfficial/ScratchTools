export default async function ({ feature, console }) {
  console.log("This is a simple script, I know.");

  // Initiate the HTML collections
  const followHTML =
    '<div id="follow-button" class="buttons"><div class="follow-button button notfollowing blue" data-control="follow"><span class="follow text"><span class="icon-sm follower white"></span>Follow</span><span class="unfollow text"><span class="icon-sm follower black"></span>Unfollow</span></div></div>';
  const profileDesc = document.getElementsByClassName("profile-details");

  profileDesc[0].insertAdjacentHTML(followHTML);
}
