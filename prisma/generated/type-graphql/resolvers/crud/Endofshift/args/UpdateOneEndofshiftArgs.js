"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEndofshiftArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftUpdateInput_1 = require("../../../inputs/EndofshiftUpdateInput");
const EndofshiftWhereUniqueInput_1 = require("../../../inputs/EndofshiftWhereUniqueInput");
let UpdateOneEndofshiftArgs = class UpdateOneEndofshiftArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftUpdateInput_1.EndofshiftUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EndofshiftUpdateInput_1.EndofshiftUpdateInput)
], UpdateOneEndofshiftArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput)
], UpdateOneEndofshiftArgs.prototype, "where", void 0);
UpdateOneEndofshiftArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneEndofshiftArgs);
exports.UpdateOneEndofshiftArgs = UpdateOneEndofshiftArgs;
