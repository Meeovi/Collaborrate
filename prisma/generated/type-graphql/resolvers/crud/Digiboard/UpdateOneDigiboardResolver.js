"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDigiboardResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneDigiboardArgs_1 = require("./args/UpdateOneDigiboardArgs");
const Digiboard_1 = require("../../../models/Digiboard");
const helpers_1 = require("../../../helpers");
let UpdateOneDigiboardResolver = class UpdateOneDigiboardResolver {
    async updateOneDigiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Digiboard_1.Digiboard, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDigiboardArgs_1.UpdateOneDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneDigiboardResolver.prototype, "updateOneDigiboard", null);
UpdateOneDigiboardResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Digiboard_1.Digiboard)
], UpdateOneDigiboardResolver);
exports.UpdateOneDigiboardResolver = UpdateOneDigiboardResolver;
