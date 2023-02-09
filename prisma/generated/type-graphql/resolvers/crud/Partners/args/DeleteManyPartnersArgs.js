"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersWhereInput_1 = require("../../../inputs/PartnersWhereInput");
let DeleteManyPartnersArgs = class DeleteManyPartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereInput_1.PartnersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersWhereInput_1.PartnersWhereInput)
], DeleteManyPartnersArgs.prototype, "where", void 0);
DeleteManyPartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPartnersArgs);
exports.DeleteManyPartnersArgs = DeleteManyPartnersArgs;
