"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersWhereUniqueInput_1 = require("../../../inputs/PartnersWhereUniqueInput");
let DeleteOnePartnersArgs = class DeleteOnePartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereUniqueInput_1.PartnersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PartnersWhereUniqueInput_1.PartnersWhereUniqueInput)
], DeleteOnePartnersArgs.prototype, "where", void 0);
DeleteOnePartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOnePartnersArgs);
exports.DeleteOnePartnersArgs = DeleteOnePartnersArgs;
