"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDigiboardResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyDigiboardArgs_1 = require("./args/DeleteManyDigiboardArgs");
const Digiboard_1 = require("../../../models/Digiboard");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyDigiboardResolver = class DeleteManyDigiboardResolver {
    async deleteManyDigiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDigiboardArgs_1.DeleteManyDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyDigiboardResolver.prototype, "deleteManyDigiboard", null);
DeleteManyDigiboardResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Digiboard_1.Digiboard)
], DeleteManyDigiboardResolver);
exports.DeleteManyDigiboardResolver = DeleteManyDigiboardResolver;
