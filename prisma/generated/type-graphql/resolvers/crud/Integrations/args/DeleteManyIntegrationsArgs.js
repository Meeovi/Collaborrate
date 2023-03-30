"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyIntegrationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsWhereInput_1 = require("../../../inputs/IntegrationsWhereInput");
let DeleteManyIntegrationsArgs = class DeleteManyIntegrationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsWhereInput_1.IntegrationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsWhereInput_1.IntegrationsWhereInput)
], DeleteManyIntegrationsArgs.prototype, "where", void 0);
DeleteManyIntegrationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyIntegrationsArgs);
exports.DeleteManyIntegrationsArgs = DeleteManyIntegrationsArgs;
