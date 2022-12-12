"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersUpdateManyMutationInput_1 = require("../../../inputs/PartnersUpdateManyMutationInput");
const PartnersWhereInput_1 = require("../../../inputs/PartnersWhereInput");
let UpdateManyPartnersArgs = class UpdateManyPartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersUpdateManyMutationInput_1.PartnersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PartnersUpdateManyMutationInput_1.PartnersUpdateManyMutationInput)
], UpdateManyPartnersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereInput_1.PartnersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersWhereInput_1.PartnersWhereInput)
], UpdateManyPartnersArgs.prototype, "where", void 0);
UpdateManyPartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPartnersArgs);
exports.UpdateManyPartnersArgs = UpdateManyPartnersArgs;
