"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesCreateInput_1 = require("../../../inputs/Gift_certificatesCreateInput");
const Gift_certificatesUpdateInput_1 = require("../../../inputs/Gift_certificatesUpdateInput");
const Gift_certificatesWhereUniqueInput_1 = require("../../../inputs/Gift_certificatesWhereUniqueInput");
let UpsertOneGift_certificatesArgs = class UpsertOneGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput)
], UpsertOneGift_certificatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesCreateInput_1.Gift_certificatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesCreateInput_1.Gift_certificatesCreateInput)
], UpsertOneGift_certificatesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesUpdateInput_1.Gift_certificatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Gift_certificatesUpdateInput_1.Gift_certificatesUpdateInput)
], UpsertOneGift_certificatesArgs.prototype, "update", void 0);
UpsertOneGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneGift_certificatesArgs);
exports.UpsertOneGift_certificatesArgs = UpsertOneGift_certificatesArgs;
