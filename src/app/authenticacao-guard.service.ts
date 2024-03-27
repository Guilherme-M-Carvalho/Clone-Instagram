import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Authenticacao } from "./authenticacao.service";

@Injectable()
export class AuthenticacaoGuard implements CanActivate {

    constructor(private authenticacao: Authenticacao){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return this.authenticacao.autenticado()
    }
}