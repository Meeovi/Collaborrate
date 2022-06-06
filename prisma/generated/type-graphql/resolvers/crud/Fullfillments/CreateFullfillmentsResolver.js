"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFullfillmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateFullfillmentsArgs_1 = require("./args/CreateFullfillmentsArgs");
const Fullfillments_1 = require("../../../models/Fullfillments");
const helpers_1 = require("../../../helpers");
let CreateFullfillmentsResolver = class CreateFullfillmentsResolver {
    async createFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Fullfillments_1.Fullfillments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateFullfillmentsArgs_1.CreateFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateFullfillmentsResolver.prototype, "createFullfillments", null);
CreateFullfillmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Fullfillments_1.Fullfillments)
], CreateFullfillmentsResolver);
exports.CreateFullfillmentsResolver = CreateFullfillmentsResolver;
