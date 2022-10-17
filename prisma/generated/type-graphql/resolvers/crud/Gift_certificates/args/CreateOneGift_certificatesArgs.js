"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesCreateInput_1 = require("../../../inputs/Gift_certificatesCreateInput");
let CreateOneGift_certificatesArgs = class CreateOneGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesCreateInput_1.Gift_certificatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesCreateInput_1.Gift_certificatesCreateInput)
], CreateOneGift_certificatesArgs.prototype, "data", void 0);
CreateOneGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneGift_certificatesArgs);
exports.CreateOneGift_certificatesArgs = CreateOneGift_certificatesArgs;
