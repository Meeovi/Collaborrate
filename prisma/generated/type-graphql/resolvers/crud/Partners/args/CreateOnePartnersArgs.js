"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersCreateInput_1 = require("../../../inputs/PartnersCreateInput");
let CreateOnePartnersArgs = class CreateOnePartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersCreateInput_1.PartnersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PartnersCreateInput_1.PartnersCreateInput)
], CreateOnePartnersArgs.prototype, "data", void 0);
CreateOnePartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOnePartnersArgs);
exports.CreateOnePartnersArgs = CreateOnePartnersArgs;
