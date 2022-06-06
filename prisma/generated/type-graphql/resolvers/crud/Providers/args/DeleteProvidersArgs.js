"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProvidersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersWhereUniqueInput_1 = require("../../../inputs/ProvidersWhereUniqueInput");
let DeleteProvidersArgs = class DeleteProvidersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], DeleteProvidersArgs.prototype, "where", void 0);
DeleteProvidersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteProvidersArgs);
exports.DeleteProvidersArgs = DeleteProvidersArgs;
