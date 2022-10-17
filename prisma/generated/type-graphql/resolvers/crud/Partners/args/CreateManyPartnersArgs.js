"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersCreateManyInput_1 = require("../../../inputs/PartnersCreateManyInput");
let CreateManyPartnersArgs = class CreateManyPartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PartnersCreateManyInput_1.PartnersCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPartnersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPartnersArgs.prototype, "skipDuplicates", void 0);
CreateManyPartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPartnersArgs);
exports.CreateManyPartnersArgs = CreateManyPartnersArgs;
