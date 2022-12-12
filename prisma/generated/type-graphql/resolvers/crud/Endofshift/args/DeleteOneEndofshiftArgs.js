"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEndofshiftArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftWhereUniqueInput_1 = require("../../../inputs/EndofshiftWhereUniqueInput");
let DeleteOneEndofshiftArgs = class DeleteOneEndofshiftArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput)
], DeleteOneEndofshiftArgs.prototype, "where", void 0);
DeleteOneEndofshiftArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneEndofshiftArgs);
exports.DeleteOneEndofshiftArgs = DeleteOneEndofshiftArgs;
