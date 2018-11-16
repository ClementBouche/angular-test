# Javascript

## Coercion 

https://dorey.github.io/JavaScript-Equality-Table/

## Event Queue / Thread

https://developer.mozilla.org/fr/docs/Web/JavaScript/Concurrence_et_boucle_des_%C3%A9v%C3%A9nements

## Hoisting

https://developer.mozilla.org/fr/docs/Glossaire/Hoisting

## DART 

https://www.dartlang.org/

## ATScript

* annotation

https://en.wikipedia.org/wiki/AtScript

## Shadow Dom

https://developer.mozilla.org/fr/docs/Web/Web_Components/Shadow_DOM

## SUPER TOOLS

* https://jsbin.com/?html,output
* https://stackblitz.com/

## Rxjs

https://stackblitz.com/edit/angular-observables-create-cancel-hot-yvvtjv?file=src/app/app.component.ts

## To Watch

https://nitayneeman.com/posts/all-talks-from-ng-conf-2018/


# Angular

## Component

scructture application
* main.ts
* appele un module app.module.ts
* 'appele' un component app.component.ts

one way data biding
* le pere notifie au enfant les evolution
* les enfants ne notifie pas aux parent
* flux dilemene pattern
-> pour contourner le pb on utilise un @output

-> on peut aussi simuler le two-way data-binding 
* [(ngModel)]="user"
Simule la somme
* @Input() user;
* @Output() userChange = new EventEmitter<>();

smart component vs dump component
* smart component
* dump component (affichage uniquement)

## Tools

https://augury.rangle.io/

## Injection de dépendances

ngModel
* uniquement des éléments de formulaire
* permet le one-way ou two-way data binding
[(ngModel)] cache un (ngModelChange)


Injection Token
* peut être instancié

Directive
* un component est une directive + un template + un style
