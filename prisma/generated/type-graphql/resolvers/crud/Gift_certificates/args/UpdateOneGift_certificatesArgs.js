"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesUpdateInput_1 = require("../../../inputs/Gift_certificatesUpdateInput");
const Gift_certificatesWhereUniqueInput_1 = require("../../../inputs/Gift_certificatesWhereUniqueInput");
let UpdateOneGift_certificatesArgs = class UpdateOneGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesUpdateInput_1.Gift_certificatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesUpdateInput_1.Gift_certificatesUpdateInput)
], UpdateOneGift_certificatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput)
], UpdateOneGift_certificatesArgs.prototype, "where", void 0);
UpdateOneGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneGift_certificatesArgs);
exports.UpdateOneGift_certificatesArgs = UpdateOneGift_certificatesArgs;
