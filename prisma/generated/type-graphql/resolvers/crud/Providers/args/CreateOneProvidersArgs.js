"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProvidersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateInput_1 = require("../../../inputs/ProvidersCreateInput");
let CreateOneProvidersArgs = class CreateOneProvidersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateInput_1.ProvidersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateInput_1.ProvidersCreateInput)
], CreateOneProvidersArgs.prototype, "data", void 0);
CreateOneProvidersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneProvidersArgs);
exports.CreateOneProvidersArgs = CreateOneProvidersArgs;
