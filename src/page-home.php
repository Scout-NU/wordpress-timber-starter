<?php

$context = Timber::get_context();

$homePageId = 23; // if ID changes, this will have to be manually updated
$homePage = new TimberPost($homePageId);
$context['homePage'] = $homePage;

Timber::render('home.twig', $context);
