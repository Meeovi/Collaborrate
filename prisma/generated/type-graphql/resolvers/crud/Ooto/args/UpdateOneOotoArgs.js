"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoUpdateInput_1 = require("../../../inputs/OotoUpdateInput");
const OotoWhereUniqueInput_1 = require("../../../inputs/OotoWhereUniqueInput");
let UpdateOneOotoArgs = class UpdateOneOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoUpdateInput_1.OotoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoUpdateInput_1.OotoUpdateInput)
], UpdateOneOotoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereUniqueInput_1.OotoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoWhereUniqueInput_1.OotoWhereUniqueInput)
], UpdateOneOotoArgs.prototype, "where", void 0);
UpdateOneOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneOotoArgs);
exports.UpdateOneOotoArgs = UpdateOneOotoArgs;
