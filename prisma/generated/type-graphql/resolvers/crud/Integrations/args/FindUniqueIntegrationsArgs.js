"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIntegrationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsWhereUniqueInput_1 = require("../../../inputs/IntegrationsWhereUniqueInput");
let FindUniqueIntegrationsArgs = class FindUniqueIntegrationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput)
], FindUniqueIntegrationsArgs.prototype, "where", void 0);
FindUniqueIntegrationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueIntegrationsArgs);
exports.FindUniqueIntegrationsArgs = FindUniqueIntegrationsArgs;
