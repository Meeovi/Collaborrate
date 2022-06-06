"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProvidersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateInput_1 = require("../../../inputs/ProvidersCreateInput");
let CreateProvidersArgs = class CreateProvidersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateInput_1.ProvidersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateInput_1.ProvidersCreateInput)
], CreateProvidersArgs.prototype, "data", void 0);
CreateProvidersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateProvidersArgs);
exports.CreateProvidersArgs = CreateProvidersArgs;
