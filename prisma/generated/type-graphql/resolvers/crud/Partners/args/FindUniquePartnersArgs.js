"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersWhereUniqueInput_1 = require("../../../inputs/PartnersWhereUniqueInput");
let FindUniquePartnersArgs = class FindUniquePartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereUniqueInput_1.PartnersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PartnersWhereUniqueInput_1.PartnersWhereUniqueInput)
], FindUniquePartnersArgs.prototype, "where", void 0);
FindUniquePartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePartnersArgs);
exports.FindUniquePartnersArgs = FindUniquePartnersArgs;
