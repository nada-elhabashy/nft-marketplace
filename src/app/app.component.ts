import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { TrendingCollectionComponent } from "./trending-collection/trending-collection.component";
import { TopRatedArtistComponent } from "./top-rated-artist/top-rated-artist.component";
import { BrowseCategoriesComponent } from "./browse-categories/browse-categories.component";
import { DiscoverMoreComponent } from "./discover-more/discover-more.component";
import { NftHighlightComponent } from "./nft-highlight/nft-highlight.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { SubscribeWidgetComponent } from "./subscribe-widget/subscribe-widget.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, HeroSectionComponent, TrendingCollectionComponent, TopRatedArtistComponent, BrowseCategoriesComponent, DiscoverMoreComponent, NftHighlightComponent, HowItWorksComponent, SubscribeWidgetComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nft-marketplace';
}
