"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEndofshiftArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftWhereInput_1 = require("../../../inputs/EndofshiftWhereInput");
let DeleteManyEndofshiftArgs = class DeleteManyEndofshiftArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftWhereInput_1.EndofshiftWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftWhereInput_1.EndofshiftWhereInput)
], DeleteManyEndofshiftArgs.prototype, "where", void 0);
DeleteManyEndofshiftArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyEndofshiftArgs);
exports.DeleteManyEndofshiftArgs = DeleteManyEndofshiftArgs;
