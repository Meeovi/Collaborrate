"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsUpdateInput_1 = require("../../../inputs/FullfillmentsUpdateInput");
const FullfillmentsWhereUniqueInput_1 = require("../../../inputs/FullfillmentsWhereUniqueInput");
let UpdateFullfillmentsArgs = class UpdateFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsUpdateInput_1.FullfillmentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsUpdateInput_1.FullfillmentsUpdateInput)
], UpdateFullfillmentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput)
], UpdateFullfillmentsArgs.prototype, "where", void 0);
UpdateFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateFullfillmentsArgs);
exports.UpdateFullfillmentsArgs = UpdateFullfillmentsArgs;
