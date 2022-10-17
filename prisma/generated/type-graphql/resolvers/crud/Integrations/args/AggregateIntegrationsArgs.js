"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIntegrationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/IntegrationsOrderByWithRelationAndSearchRelevanceInput");
const IntegrationsWhereInput_1 = require("../../../inputs/IntegrationsWhereInput");
const IntegrationsWhereUniqueInput_1 = require("../../../inputs/IntegrationsWhereUniqueInput");
let AggregateIntegrationsArgs = class AggregateIntegrationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsWhereInput_1.IntegrationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsWhereInput_1.IntegrationsWhereInput)
], AggregateIntegrationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsOrderByWithRelationAndSearchRelevanceInput_1.IntegrationsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateIntegrationsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput)
], AggregateIntegrationsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateIntegrationsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateIntegrationsArgs.prototype, "skip", void 0);
AggregateIntegrationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateIntegrationsArgs);
exports.AggregateIntegrationsArgs = AggregateIntegrationsArgs;
