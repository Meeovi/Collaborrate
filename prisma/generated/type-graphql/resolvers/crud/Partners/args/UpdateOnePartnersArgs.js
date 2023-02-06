"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersUpdateInput_1 = require("../../../inputs/PartnersUpdateInput");
const PartnersWhereUniqueInput_1 = require("../../../inputs/PartnersWhereUniqueInput");
let UpdateOnePartnersArgs = class UpdateOnePartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersUpdateInput_1.PartnersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PartnersUpdateInput_1.PartnersUpdateInput)
], UpdateOnePartnersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereUniqueInput_1.PartnersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PartnersWhereUniqueInput_1.PartnersWhereUniqueInput)
], UpdateOnePartnersArgs.prototype, "where", void 0);
UpdateOnePartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePartnersArgs);
exports.UpdateOnePartnersArgs = UpdateOnePartnersArgs;
