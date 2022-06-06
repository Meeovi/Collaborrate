"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesCreateInput_1 = require("../../../inputs/Gift_certificatesCreateInput");
let CreateGift_certificatesArgs = class CreateGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesCreateInput_1.Gift_certificatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesCreateInput_1.Gift_certificatesCreateInput)
], CreateGift_certificatesArgs.prototype, "data", void 0);
CreateGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateGift_certificatesArgs);
exports.CreateGift_certificatesArgs = CreateGift_certificatesArgs;
