"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersCreateInput_1 = require("../../../inputs/PartnersCreateInput");
const PartnersUpdateInput_1 = require("../../../inputs/PartnersUpdateInput");
const PartnersWhereUniqueInput_1 = require("../../../inputs/PartnersWhereUniqueInput");
let UpsertOnePartnersArgs = class UpsertOnePartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereUniqueInput_1.PartnersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PartnersWhereUniqueInput_1.PartnersWhereUniqueInput)
], UpsertOnePartnersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersCreateInput_1.PartnersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PartnersCreateInput_1.PartnersCreateInput)
], UpsertOnePartnersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersUpdateInput_1.PartnersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PartnersUpdateInput_1.PartnersUpdateInput)
], UpsertOnePartnersArgs.prototype, "update", void 0);
UpsertOnePartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePartnersArgs);
exports.UpsertOnePartnersArgs = UpsertOnePartnersArgs;
