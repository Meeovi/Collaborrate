"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersOrderByWithRelationInput_1 = require("../../../inputs/PartnersOrderByWithRelationInput");
const PartnersWhereInput_1 = require("../../../inputs/PartnersWhereInput");
const PartnersWhereUniqueInput_1 = require("../../../inputs/PartnersWhereUniqueInput");
let AggregatePartnersArgs = class AggregatePartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereInput_1.PartnersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersWhereInput_1.PartnersWhereInput)
], AggregatePartnersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PartnersOrderByWithRelationInput_1.PartnersOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePartnersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereUniqueInput_1.PartnersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersWhereUniqueInput_1.PartnersWhereUniqueInput)
], AggregatePartnersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePartnersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePartnersArgs.prototype, "skip", void 0);
AggregatePartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePartnersArgs);
exports.AggregatePartnersArgs = AggregatePartnersArgs;
