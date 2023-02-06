"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneApitokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenUpdateInput_1 = require("../../../inputs/ApitokenUpdateInput");
const ApitokenWhereUniqueInput_1 = require("../../../inputs/ApitokenWhereUniqueInput");
let UpdateOneApitokenArgs = class UpdateOneApitokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenUpdateInput_1.ApitokenUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ApitokenUpdateInput_1.ApitokenUpdateInput)
], UpdateOneApitokenArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput)
], UpdateOneApitokenArgs.prototype, "where", void 0);
UpdateOneApitokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneApitokenArgs);
exports.UpdateOneApitokenArgs = UpdateOneApitokenArgs;
